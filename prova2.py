#Você está criando um programa em Python para simular um jogo simples de adivinhação. O programa deve gerar um número aleatório entre 1 e 10 e pedir ao jogador para adivinhar o número. O jogador terá até 3 tentativas para acertar.

#Implemente o jogo utilizando um loop 'while' para permitir que o jogador faça múltiplas tentativas até acertar ou atingir o limite de tentativas. Utilize a estrutura 'else' para exibir uma mensagem de encorajamento caso o jogador acerte e uma mensagem de consolo caso as 3 tentativas se esgotem sem sucesso


numero_secreto = 8
chances = 0
chances_restantes = 3

while chances != numero_secreto and chances_restantes > 0:
    chances = int(input("Tente advinhar o número secreto: "))
    chances_restantes -= 1
    if chances != numero_secreto:
        print(f"Tentativas restantes: {chances_restantes}")

if chances == numero_secreto:
    print("Parabéns! Você acertou.")   
else:
    print(f"Que pena! Suas chances acabaram. O número secreto era {numero_secreto}.")         