from django.urls import path
from .views import markdown_to_pdf

urlpatterns = [
    path('markdown-to-pdf/', markdown_to_pdf, name='md-to-pdf'),
]