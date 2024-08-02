import openai

chave_api = "Sua chave aqui"

def enviar_mensagem(mensagem, lista_mensagens=[]):
    lista_mensagens.append(
{"role":"user", "content": mensagem}
    )

    resposta = openai.ChatCompletion.create(
model = "gpt 3.5 turbo",
mensage = lista_mensagens,
    )

    resposta_texto = resposta["choices"][0]["mensage"]["content"]

    return resposta_texto

lista_mensagens = []
while True:
    texto = input("Escreva sua mensagem: ")

    if texto == "sair":
        break
    else:
        resposta = enviar_mensagem(texto, lista_mensagens)
        lista_mensagens.append({"role": "assistant", "content": resposta})
        print("Chatbot", resposta)