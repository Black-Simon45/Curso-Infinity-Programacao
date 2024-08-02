#Faça um programa que leia três números e mostre o maior deles.

n1 = float(input("digite um número: "))
n2 = float(input("digite um número: "))
n3 = float(input("digite um número: "))

if n1 > n2 > n3:
    print(n1)
elif n2 > n3 > n1:
    print(n2)
else:
    print(n3)  