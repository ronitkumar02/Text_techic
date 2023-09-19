from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from .pdf_to_text import pdf_to_text
@api_view(['GET', 'POST'])
@csrf_exempt
def summarize_text(request):
    if request.method == 'POST':
        uploaded_file = request.FILES.get('pdf')
        if uploaded_file:
            # content = uploaded_file.read()
            # print(uploaded_file)
            text = pdf_to_text(uploaded_file)
            # Perform text summarization logic here
            summarized_text = "This is the summarized pdf."
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
            content = uploaded_file.read()
            # Perform text simplification logic here
            simplified_text = "This is the simplified text."
            return JsonResponse({'simplified_text': simplified_text})
    return JsonResponse({'error': 'Invalid request'})
