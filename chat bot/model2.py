## final general chatbot 

from langchain.document_loaders import PyPDFLoader, DirectoryLoader
from langchain import PromptTemplate
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS
from langchain.llms import CTransformers
from langchain.chains import RetrievalQA
import chainlit as cl
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from chainlit import AskUserMessage, Message
import json

DB_FAISS_PATH = 'vectorstore/db_faiss'

custom_prompt_template = """Use the following pieces of information to answer the user's question.
If you don't know the answer, just say that you don't know, don't try to make up an answer.

Context: {context}
Question: {question}

Only return the helpful answer below and nothing else.
Helpful answer:
"""

def set_custom_prompt():
    prompt = PromptTemplate(template=custom_prompt_template,
                            input_variables=['context', 'question'])
    return prompt

#Retrieval QA Chain
def retrieval_qa_chain(llm, prompt, db):
    qa_chain = RetrievalQA.from_chain_type(llm=llm,
                                       chain_type='stuff',
                                       retriever=db.as_retriever(search_kwargs={'k': 2}),
                                       return_source_documents=True,
                                       chain_type_kwargs={'prompt': prompt}
                                       )
    return qa_chain

#Loading the model
def load_llm():
    # Load the locally downloaded model here
    llm = CTransformers(
        model = "llama-2-7b-chat.ggmlv3.q8_0.bin",
        model_type="llama",
        max_new_tokens = 512,
        temperature = 0.8
    )
    
    return llm

#QA Model Function
def qa_bot():
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2",
                                       model_kwargs={'device': 'cpu'})
    db = FAISS.load_local(DB_FAISS_PATH, embeddings)
    llm = load_llm()
    qa_prompt = set_custom_prompt()
    qa = retrieval_qa_chain(llm, qa_prompt, db)

    return qa
conversation_memory = ConversationBufferMemory(max_history_length=15)
#output function
def final_result(query):
    qa_result = qa_bot()
    response = qa_result({'query': query})
    return response

@cl.on_chat_start
async def start():
    # Initialize the chatbot's conversation chain
    chain = qa_bot()

    # Send a professional introduction message
    await cl.Message(content="Hello, I am your Legal Document Assistant. Let's get started...").send()

    # Ask the user for their name and how you can assist them
    res = await cl.AskUserMessage(
        content="May I know your name? How can I assist you with your legal documents?",
        timeout=30
    ).send()

    if res:
        # Extract the user's name from the response
        user_name = res['content']

        # Create a set of FAQ buttons
        faq_buttons = [
            cl.Action(name="faq_contract", value="faq_contract", description="How to create a legal contract?"),
            cl.Action(name="faq_tenant_rights", value="faq_tenant_rights", description="What are my rights as a tenant?"),
            cl.Action(name="faq_divorce", value="faq_divorce", description="How to file for divorce?"),
        ]

        # Send a welcoming message with the user's name and FAQ buttons
        await cl.Message(
            content=f"Thank you, {user_name}. How can I assist you with your legal document today?",
            actions=faq_buttons
        ).send()

    # Store the conversation chain in the user's session
    cl.user_session.set("chain", chain)

    @cl.action_callback('faq_contract')
    async def handle_faq_contract():
        query = "How to create a legal contract?"
        result = final_result(query)
        result_text = str(result["result"])
        print(result_text)
        await cl.Message(content=result_text).send()

    @cl.action_callback('faq_tenant_rights')
    async def on_faq_tenant_rights(context):
        query = "What are my rights as a tenant?"
        result = final_result(query)
        result_text = str(result["result"])
        print(result_text)
        await cl.Message(content=result_text).send()

    @cl.action_callback('faq_divorce')
    async def on_faq_divorce(context):
        query = "How to file for divorce?"
        result = final_result(query)
        result_text = str(result["result"])
        print(result_text)
        await cl.Message(content=result_text).send()

@cl.on_message
async def main(message):
    chain = cl.user_session.get("chain")

    cb = cl.AsyncLangchainCallbackHandler(
        stream_final_answer=True, answer_prefix_tokens=["FINAL", "ANSWER"]
    )
    cb.answer_reached = True
    res = await chain.acall(message, callbacks=[cb])
    answer = res["result"]
    sources = res["source_documents"]

    if sources:
        answer = f"\nSources:" + str(sources)
    else:
        answer += "\nNo sources found"

    await cl.Message(content=answer).send()




