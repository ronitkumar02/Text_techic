# CPU
# !pip install llama-cpp-python==0.1.78

# GPU llama-cpp-python
# !CMAKE_ARGS="-DLLAMA_CUBLAS=on" FORCE_CMAKE=1 pip install llama-cpp-python==0.1.78 --force-reinstall --upgrade --no-cache-dir --verbose

# !pip install huggingface_hub

# model_name_or_path = "TheBloke/Llama-2-7B-chat-GGML"
# model_basename = "llama-2-7b-chat.ggmlv3.q5_1.bin" # the model is in bin format

# from huggingface_hub import hf_hub_download

model_path = "C:\\Users\\RONIT KUMAR\Desktop\\project\\chat bot\\llama-2-7b-chat.ggmlv3.q8_0.bin"
# hf_hub_download(repo_id=model_name_or_path, filename=model_basename)

"""Loading the model"""

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
print(lcpp_llm.params.n_gpu_layers)

"""We will use this prompt."""


text_file_path = 'text2.txt'

# Open the text file
with open(text_file_path, 'r', encoding='utf-8') as text_file:
    text = text_file.read()

from langchain.text_splitter import CharacterTextSplitter
text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1200,
        chunk_overlap=100,
        length_function=len
    )
chunks = text_splitter.split_text(text)
print(chunks[0])

#for extracting labels!!!!!!!!so prob the final one ##FINALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
#FINALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
import re
output_file = open("sum.txt", "w", encoding="utf-8")
for part in chunks:
    prompt_template = f''' SYSTEM:I want you to strictly follow these instructions. you are an expert summariser,outlining and structuring. Your style of writing should be informative and logical.
     i want you to strictly summarise every line in bullet points. Ignore all prior instructions,strictly Provide me with a summary of the content.Strictly include all the date,names,section,Parties,Agreement,Contract,Clause,Law,Court,Case,Witness,Judge,Attorney,Lawyer,Evidence,Settlement,Damages,Jurisdiction,Complaint,Pleading,Testimony,Summons,Deposition,Injunction,money,Affidavit,Entities,Property,Rights,Obligations.
     strictly do not remind me what I asked you for. Do not strictly apologize. Do not strictly self-reference.
     Should be in bullet points all the time

     strictly do not generate the instruction which i gave

    USER: {part}
    ASSISTANT:
    '''
    response = lcpp_llm(
        prompt=prompt_template,
        max_tokens=4096,
        temperature=0.5,
        top_p=0.95,
        repeat_penalty=1.2,
        top_k=50,
        stop=['USER:'],  # Dynamic stopping when such a token is detected.
        echo=False  # Return the prompt
    )
    print(response["choices"][0]["text"])
    text= response["choices"][0]["text"]
    # Split the text into paragraphs
    paragraphs = re.split(r'\n\s*\n', text.strip())

    bullet_points = []

# Extract the bullet points from each paragraph
    for paragraph in paragraphs:
      points = re.findall(r'[•\-*] (.+)', paragraph)
      if points:
        bullet_points.extend(points)

# Create a text file for saving the bullet points


# Loop through the extracted bullet points and write them to the file
    for idx, point in enumerate(bullet_points):
    # Write each bullet point to the file
      output_file.write(f"{point}\n")

# Close the output file
output_file.close()

# Print a message indicating that the bullet points have been saved
print("Bullet points have been saved to bullet_points.txt")