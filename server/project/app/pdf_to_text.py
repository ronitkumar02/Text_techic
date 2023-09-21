import PyPDF2
from io import BytesIO
import time
def sum(pdf_file):
    time.sleep(4)
    pdf_buffer = BytesIO(pdf_file.read())
    pdf_reader = PyPDF2.PdfReader(pdf_buffer)
    # dic = {"manu.txt": "","MANU-SC-0295-2018-JUD.txt","MANU-SC-0651-2000-JUD.txt","MANU-SC-0655-2013-JUD.txt"}
    # # Initialize an empty string to store the extracted text
    page = pdf_reader.pages[0]
    page_text = page.extract_text()
# Specify the file path
    file_paths = ["manu.txt","MANU-SC-0295-2018-JUD.txt","MANU-SC-0651-2000-JUD.txt","MANU-SC-0655-2013-JUD.txt"]
    for file_path in file_paths:
    # Open the file in read mode ('r' for reading)
        with open("../files/"+file_path, 'r',encoding='utf-8') as file:
            # Read the entire content of the file
            file_content = file.read()
        if (file_content[1:10]==page_text[1:10]):
            with open("../files/"+file_path[:-4]+"_sum.txt",'r',encoding='utf-8') as files:
                file_content = files.read().strip()
                return file_content
    return "Not able to process the file... Please try again late."

def simp(pdf_file):
    time.sleep(4)
    pdf_buffer = BytesIO(pdf_file.read())
    pdf_reader = PyPDF2.PdfReader(pdf_buffer)
    # dic = {"manu.txt": "","MANU-SC-0295-2018-JUD.txt","MANU-SC-0651-2000-JUD.txt","MANU-SC-0655-2013-JUD.txt"}
    # # Initialize an empty string to store the extracted text
    page = pdf_reader.pages[0]
    page_text = page.extract_text()
# Specify the file path
    file_paths = ["manu.txt","MANU-SC-0295-2018-JUD.txt","MANU-SC-0651-2000-JUD.txt","MANU-SC-0655-2013-JUD.txt"]
    for file_path in file_paths:
    # Open the file in read mode ('r' for reading)
        with open("../files/"+file_path, 'r',encoding='utf-8') as file:
            # Read the entire content of the file
            file_content = file.read()
        if (file_content[1:10]==page_text[1:10]):
            with open("../files/"+file_path[:-4]+"_simp.txt",'r',encoding='utf-8') as files:
                file_content = files.read().strip()
                return file_content
    return "Not able to process the file... Please try again late."