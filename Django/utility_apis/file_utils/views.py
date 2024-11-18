from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
import markdown2
from fpdf import FPDF
import re

@api_view(['POST'])
def markdown_to_pdf(request):
    content = request.data.get('content', '')
    
    if not content:
        return Response({'error': 'Content is required'}, status=400)

    try:
        html_content = markdown2.markdown(content)
        html_content = re.sub(r'<.*?>', '', html_content)

        pdf = FPDF()
        pdf.add_page()
        pdf.set_font("Arial", size=12)
        pdf.multi_cell(200, 10, html_content)
        pdf_file = pdf.output(dest='S').encode('latin1')
    except Exception as e:
        return Response({'error': str(e)}, status=400)

    response = HttpResponse(pdf_file, content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="md-to-pdf.pdf"'
    return response