#Faça um programa que peça dois números e imprima o maior deles.

n1 = float(input("Digite um número: "))
n2 = float(input("Digite um número: "))

if n1 > n2:
    print(n1)
elif n1 == n2:
    print("Os números são iguais")
else:
    print(n2)        