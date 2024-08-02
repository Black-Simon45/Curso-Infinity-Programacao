num_alunos = int(input('Digite o número de alunos: '))
alunos = []

for i in range(num_alunos):
    nome = input(f'\nDigite o nome do aluno {i+1}: ')
    notas = []
    for j in range(3):
        nota = float(input(f'Digite a nota {j+1} de {nome}: '))
        notas.append(nota)

    media = sum(notas) / 3
    if media >= 7.0:
        status = 'Aprovado'
    else:
        status = 'Reprovado'
    alunos.append((nome, notas, media, status))

print('\nResultados dos alunos:')
for aluno in alunos:
    nome, notas, media, status = aluno
    print(f'\nNome: {nome}')
    print(f'Notas: {notas}')
    print(f'Media: {media}')
    print(f'Status: {status}')

soma_medias = 0
for aluno in alunos:
    soma_medias += aluno[2] 
media_geral = soma_medias / num_alunos    
print(f'\nMédia geral da turma: {media_geral:.2f}')           