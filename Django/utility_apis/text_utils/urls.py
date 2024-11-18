from django.urls import path
from .views import summarize_text, analyze_text, get_fortune

urlpatterns = [
    path('summarize/', summarize_text, name='summarize-text'),
    path('analyze/', analyze_text, name='analyze-text'),
    path('fortune/', get_fortune, name='get-fortune'),
]