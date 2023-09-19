import PyPDF2
from io import BytesIO

def pdf_to_text(pdf_file):
    pdf_buffer = BytesIO(pdf_file.read())
    pdf_reader = PyPDF2.PdfReader(pdf_buffer)

    # # Initialize an empty string to store the extracted text
    text = ""

    # # Iterate through each page of the PDF
    for page_num in range(len(pdf_reader.pages)):
        # Get a specific page
        page = pdf_reader.pages[page_num]

        # Extract text from the page
        page_text = page.extract_text()

        # Append the page's text to the overall text
        text += page_text

    return text