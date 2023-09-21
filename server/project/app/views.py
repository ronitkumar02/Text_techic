import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from .pdf_to_text import sum
from .pdf_to_text import simp
from googletrans import Translator

@api_view(['GET', 'POST'])
@csrf_exempt
def summarize_text(request):
    if request.method == 'POST':
        uploaded_file = request.FILES.get('pdf')
        if uploaded_file:
            # content = uploaded_file.read()
            # print(uploaded_file)
            text = sum(uploaded_file)
            # Perform text summarization logic here
            return JsonResponse({'summarized_text':text})
    elif request.method == 'GET':
        uploaded_file = request.FILES.get('pdf')
        if uploaded_file:
            content = uploaded_file.read()
            # print(request.text())
            # Perform text simplification logic here
        simplified_text = "This is the simplified text."
        return JsonResponse({'summarized_text': simplified_text})
    return JsonResponse({'error': 'Invalid request'})

@api_view(['GET', 'POST'])
@csrf_exempt
def simplify_text(request):
    if request.method == 'POST':
        uploaded_file = request.FILES.get('pdf')
        if uploaded_file:
            # content = uploaded_file.read()
            # print(uploaded_file)
            text = simp(uploaded_file)
            # Perform text summarization logic here
            return JsonResponse({'simplified_text':text})
    elif request.method == 'GET':
        uploaded_file = request.FILES.get('pdf')
        if uploaded_file:
            content = uploaded_file.read()
            # print(request.text())
            # Perform text simplification logic here
        simplified_text = "This is the simplified text."
        return JsonResponse({'simplified_text': simplified_text})
    return JsonResponse({'error': 'Invalid request'})

@api_view(['GET', 'POST'])
@csrf_exempt
def translate(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if data:
            # data = json.loads(request.body)
            text_to_translate = data.get('text', '')
            selected_language = data.get('lang', 'en')  # Default to English if language is not specified

            # Translate the text
            # translated_content = translate_file(text_to_translate,'en', selected_language)
            translator = Translator()
            translated_content = translator.translate(text_to_translate, src='en', dest=selected_language)

            return JsonResponse({'translatedContent': translated_content.text})

    return JsonResponse({'error': 'Invalid request method'}, status=405)