import mysql.connector

# Configurações da conexão
conexao = mysql.connector.connect(
    host="localhost",  # Endereço do servidor MySQL
    user="root",   # Nome de usuário do MySQL
    password="!#Thomas45@", # Senha do MySQL
    database="loja"  # Nome do banco de dados
)

# Verificar se a conexão foi bem-sucedida
if conexao.is_connected():
    print("Conexão bem-sucedida!")
    cursor = conexao.cursor()

cursor.execute("select * from loja;") 
r = cursor.fetchone()
for r in cursor:
    print(round)

# Fechar a conexão
conexao.close()
cursor.close()
