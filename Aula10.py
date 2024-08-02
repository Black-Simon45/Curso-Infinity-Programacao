#Faça um programa para leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: Aprovado por média igual a se; Reprovado por média menor que sete e Aprovado por média com distição igual a dez.

n1 = float(input("Nota 1: "))
n2 = float(input("Nota 2: "))

media = (n1+n2)/2

if media >=7 and media <10:
    print("Aprovado")
elif media == 10:
    print("Aprovado com distinção")
else:
    print("Reprovado")        