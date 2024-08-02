#Faça um programa que pergunte qual o seu salário bruto, quanto você ganha por horas, desconto de inss, imposto de renda, sindicato e mostre o total de seu salário liquido.

salario_hora = float(input("Digite seu sálario "))
horas_trabalhadas = float(input("Digite a quantidade de horas trabalhadas: "))
salario_bruto = salario_hora * horas_trabalhadas
imposto_renda = salario_bruto * 0.11
inss = salario_bruto * 0.08
sindicato = salario_bruto * 0.05
descontos = imposto_renda + inss + sindicato
salario_liquido = salario_bruto - descontos
print(f"Salário Bruto: R${salario_bruto}\n")