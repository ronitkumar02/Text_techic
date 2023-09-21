import googletrans
from googletrans import Translator

# print(googletrans.LANGUAGES)
# Function to translate text from a source file and save it to a target file
def translate_file(input_file, source_lang, target_lang):
    translator = Translator()

    # Read text from the input file
    with open(input_file, 'r', encoding='utf-8') as file:
        text_to_translate = file.read()

    # Translate the text
    translated_text = translator.translate(text_to_translate, src=source_lang, dest=target_lang)

    # Write the translated text to the output file
    return translated_text.text
