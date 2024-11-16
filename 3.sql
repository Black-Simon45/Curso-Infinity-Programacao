create database feriados;
use feriado;

create table alunos(
nome varchar(255),
idade int,
cidade varchar(255)
);

insert into alunos  values ("Aluno G", 30, "Amazonas");

create database loja_online2;
use loja_online2;

create table Produtos(
id_produto int primary key,
nome varchar(255),
preço decimal,
qtde_estoque int
);

create table Clientes(
id_clientes int primary key,
nome varchar(255),
email varchar(255)
);

create table Pedidos(
id_pedidos int primary key,
data_pedido date,
id_clientes int,
status boolean,
foreign key (id_clientes) references Clientes(id_clientes)
);

create table Intens_Pedido(
id_itens int,
id_pedido int,
id_produto int,
qtde int
);






