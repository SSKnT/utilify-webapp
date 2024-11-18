from django.urls import path, include
from .views import compress_image, remove_background, overlay_logo, extract_metadata

urlpatterns = [
    path('compress-img/', compress_image, name='compress-image'),
    path('remove-bg/', remove_background, name='remove-bg'),
    path('add-logo/', overlay_logo, name = 'overlay-logo'),
    path('extract-md/', extract_metadata, name='extract-metadata'),
]
