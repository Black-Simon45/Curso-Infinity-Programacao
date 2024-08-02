#Faça um programa que verifique se uma letra digitada é "F" ou "M". Coforme a letra escrever: F - Feminino, M - Masculino, outra letra qualquer - Sexo inválido

letra = input("Digite uma letra: ")

if letra == "M" or letra == "m":
    print("M - Masculino")
elif letra == "F" or letra == "f":
    print("F - Feminino")
else:
    print("Sexo inválido")        