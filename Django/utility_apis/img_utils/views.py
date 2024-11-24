from django.core.files.base import ContentFile
from rest_framework.response import Response
from rest_framework.decorators import api_view
from PIL import Image, ExifTags, TiffImagePlugin, UnidentifiedImageError
from io import BytesIO
from django.http import HttpResponse

@api_view(['POST'])
def compress_image(request):
    image_file = request.FILES.get('image')
    quality = int(request.data.get('quality', 70))

    if not image_file:
        return Response({'error': 'No image provided'}, status=400)

    with Image.open(image_file) as img:
        if img.mode == 'RGBA':
            img = img.convert('RGB')
        
        compressed_image_io = BytesIO()
        img.save(compressed_image_io, format='JPEG', quality=quality)
    
    response = HttpResponse(compressed_image_io.getvalue(), content_type="image/jpeg")
    response['Content-Disposition'] = 'attachment; filename="compressed_image.jpg"'
    return response


@api_view(['POST'])
def remove_background(request):
    image_file = request.FILES.get('image')
    
    if not image_file:
        return Response({'error': 'No image provided'}, status=400)

    img = Image.open(image_file).convert('RGBA')
    data = img.getdata()

    new_data = []
    for item in data:
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            new_data.append((255, 255, 255, 0))  # Transparent
        else:
            new_data.append(item)

    img.putdata(new_data)

    # Converting img to API suitable format
    bytes_obj = BytesIO()
    img.save(bytes_obj, format='PNG')
    
    response = HttpResponse(bytes_obj.getvalue(), content_type='image/png')
    response['Content-Disposition'] = 'attachment; filename="background_removed_image.png"'
    return response


@api_view(['POST'])
def overlay_logo(request):

    try:
        background_image = request.FILES.get('background')
        logo_image = request.FILES.get('logo')
        position = (int(request.data.get('x', 0)), int(request.data.get('y', 0)))
        opacity = int(request.data.get('opacity', 128))

        if not background_image or not logo_image:
            return Response({'error': 'Both background and logo images are required'}, status=400)

        background = Image.open(background_image).convert("RGBA")
        logo = Image.open(logo_image).convert("RGBA")

        logo = logo.resize((100, 100))  

        alpha = logo.split()[3]
        alpha = alpha.point(lambda p: opacity)
        logo.putalpha(alpha)
        background.paste(logo, position, logo)
    
        final_img = BytesIO()
        background.save(final_img, format='PNG')
        
        response = HttpResponse(final_img.getvalue(), content_type='image/png')
        response['Content-Disposition'] = 'attachment; filename="logo_overlay_image.png"'
        return response

    except Exception as e:
        return Response({'error': f'Failed to overlay logo: {str(e)}'}, status=500)

@api_view(['POST'])
def extract_metadata(request):
    image_file = request.FILES.get('image')

    if not image_file:
        return Response({'error': 'No image provided'}, status=400)

    try:
        img = Image.open(image_file)
        exif_data = img._getexif() or {}  # Handle cases where EXIF data is None
        metadata = {
            'format': img.format,
            'mode': img.mode,
            'size': img.size,
            'width': img.width,
            'height': img.height
        }

        if img.format in ['JPEG', 'TIFF']:
            for tag, value in exif_data.items():
                # Exclude tags with type IFDRational
                if isinstance(value, TiffImagePlugin.IFDRational):
                    continue
                tag_name = ExifTags.TAGS.get(tag, tag)
                if isinstance(value, bytes):
                    try:
                        value = value.decode('utf-8')
                    except UnicodeDecodeError:
                        value = value.decode('latin-1')

                metadata[tag_name] = value

    except UnidentifiedImageError:
        return Response({'error': 'Uploaded file is not a valid image'}, status=400)
    except Exception as e:
        return Response({'error': f'Failed to extract metadata: {str(e)}'}, status=500)

    return Response(metadata)