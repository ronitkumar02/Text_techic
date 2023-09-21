model_path = "C:\\Users\\RONIT KUMAR\Desktop\\project\\chat bot\\llama-2-7b-chat.ggmlv3.q8_0.bin"

# GPU
# from llama_cpp import Llama
# lcpp_llm = None
# lcpp_llm = Llama(
#     model_path=model_path,
#     n_threads=2, # CPU cores
#     n_batch=512, # Should be between 1 and n_ctx, consider the amount of VRAM in your GPU.
#     n_gpu_layers=43, # Change this value based on your model and your GPU VRAM pool.
#     n_ctx=4096, # Context window
# )
# CPU
from llama_cpp import Llama

lcpp_llm = Llama(
    model_path=model_path,
    n_threads=2,
    n_ctx=4096,
    )

# See the number of layers in GPU
# lcpp_llm.params.n_gpu_layers


text_file_path = 'ourtext.txt'

# Open the text file
with open(text_file_path, 'r', encoding='utf-8') as text_file:
    text = text_file.read()

from langchain.text_splitter import CharacterTextSplitter
text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=100,
        length_function=len
    )
chunks = text_splitter.split_text(text)

len(chunks[6])

##final
response_text=""
for part in chunks:
    prompt_template = f'''SYSTEM: You are a helpful, respectful, and legal assistant.
     Always answer as helpfully. The paragraphs are too complex, making it difficult for the reader to understand the main points.
     Can you simplify them keeping all the key points intact.Include all the date,name,court,judge. Make meaningful statements.
     Strictly follow the below instructions all the time.
     First line should strictly contain only " Here is the simplified content : " , and from the next line strictly generate the simplified content.

    USER: {part}
    ASSISTANT:
    '''
    response = lcpp_llm(
        prompt=prompt_template,
        max_tokens=4096,
        temperature=0.9,
        top_p=0.95,
        repeat_penalty=1.5,
        top_k=50,
        stop=['USER:'],  # Dynamic stopping when such a token is detected.
        echo=False  # Return the prompt
    )
    # Extract the generated response text without unwanted messages
    response_text += response["choices"][0]["text"]

import re
import textwrap

input_text = response_text

text_lines = input_text.split('\n')

modified_content = []

patterns = [
    "Here is the simplified content",
    "Here is simplified content ",
    "Here's simplified content",
     "HERE IS THE SIMPLIFIED CONTENT ",
    "Here is a simplified version of your content, please review and make any necessary corrections before submitting it for further assistance  ",
    "Here is simplified content that captures key points without compromising on legal accuracy and meaningful statements ",
    " Here Is The Simplified Content ",
    "Here is simplified version with all key points intact",
    " Here is simplified version based on your instructions ",
    "Is there anything else I can help with ?",
    "Llama.generate: prefix-match hit",
    "Please find below all key points simplified",
    " I took utmost care to ensure there is no loss or distortion Of information crucial for understanding while simplifying the content . Still , if you feel any  changes are necessary, do get in touch with me and will try my best To incorporate them respectfully.",
    "User:",
    "Is there any other question you have?",
    "I'll be glad to assist further !",
    " Here is simplified content for easy reading :",
    "Does this simplify things?",
    "Please guide or clarify how you would like this simplified content modified",
    " Please Confirm If It Accurate capture All Key Points Before  i can Proceed With Further simplication :",
    "Please Confirm If Above Simplified Version Acccurately Captures All Key Points Of Your Petition Before i Proceed With Furthersimplication.",
    "Here Is The SImplifed Content of your petitiotns Please Confirm If It accuratly captiires all key points before I proceed with further Simpification",
    "Please Confirm If The above simplified version accurately captures all key points before i proceed With Further Simplication .",
    "Kindly Confirm If Above Simplified Version Accurately Captures All Key Points Of Your Petition Before I Proceed With Further simplication .",
    "Here Is Tha SImplified Contnet of your petition, please confirm if it Accuratly Captires All Key Points Before I Proceed with Furthersimpilation",
    "Is that okay to understand , if so please let me know I will begin with simplified version of the content? ",
    "Please note i simplfird the content as per your request ,hope you find it helpful!",
    "Here are simplified contents",
    " HERE IS A SIMPLIFIED VARIANT OF YOUR QUESTION",
    "And from the next line strictly generate simplified content without any paragraphs",
    "Here is the simplified content :",
    "Kindly let me know if there's anything else you need from the original content",
    "I have simplified it while ensuring that all key points remain intact",
    "Here is simplified content",
    "Please clarify if this is correct understanding",
    " Here is simplified version",
    "Here is a simplified version",
    "Here is the simplified version",
    "Here is simplified content",
    "HERE IS A SIMPLIFIED VERSION OF YOUR QUESTION",
    "of your content",
    "Here is the simplified content of",
    "Here is a simplified content of",
    "Here is simplified content of",
    "Here are simplified contents of",
    "Here is a simplified version of",

]

pattern_regexes = [re.compile(r'\s*' + re.escape(pattern) + r'\s*', re.IGNORECASE) for pattern in patterns]


for line in text_lines:
    modified_line = line
    for pattern_regex in pattern_regexes:
        modified_line = pattern_regex.sub("", modified_line)
    modified_content.append(modified_line)


final_text = '\n'.join(modified_content)

line_width = 80
wrapped_text = textwrap.fill(final_text, width=line_width)

print(wrapped_text)

text_to_save = wrapped_text

file_path = 'output.txt'

with open(file_path, 'w', encoding='utf-8') as file:
    file.write(text_to_save)

print(f'Text has been saved to {file_path}')