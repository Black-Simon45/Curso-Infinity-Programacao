create database Tom_45;
use Tom_45;
create table alunos(
id int, 
nome varchar(255), 
esta_ativo boolean
);
alter table alunos add column data_matricula date;
alter table alunos change column esta_ativo status boolean;

drop table aluno;

insert into alunos values (1, "Cleiton", true, "2024-11-09");

truncate table alunos;

create database escola;
use escola;
create table alunos(id_alunos int,
nome varchar(255),
 idade int);
 
create table cursos(id_curso int, 
nome_curso varchar(255),
carga_horaria int);

create table matriculas(id_matricula int,
 id_alunos int, 
 id_curso int, 
 data_matricula int);

drop table cursos;

create database faculdade;
use faculdade;

create table alunos(num_matricula int, 
nome varchar(255),
 idade int, 
 endereço varchar(255));
 
 create table professores(num_matricula int, 
 nome varchar(255), 
 especialidade varchar(255),
 endereço varchar(255);
 
create database loja;
use loja;

drop table pedidos;

create table clientes(
id_cliente int primary key,
nome_cliente varchar(255),
email varchar(255)
);

create table pedidos(
id_pedido int primary key,
id_cliente int,
data_pedido date,
foreign key (id_cliente) references clientes(id_cliente)
);

create table produtos(
id_produto int,
nome_produto varchar(255),
preço float
check (preço > 0)
);








