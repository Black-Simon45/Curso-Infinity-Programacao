create database faculdade;
use faculdade;

create table alunos(
num_matricula int auto_increment primary key, 
nome varchar(255), 
idade int, 
endereço varchar(255));

create table professores(
num_matricula int primary key auto_increment,
 nome varchar(255), 
 especialidade varchar(255), 
 endereço varchar(255));
 
 create table turma(
 id int primary key auto_increment, 
 horario_inicio int, 
 dia_semana varchar(255));
 
 create table disciplina(
 id int primary key auto_increment, 
 nome varchar(255), 
 qtd_aulas int);
 
 insert into alunos (nome, idade, endereço)
 values("Cleiton", 42, "Rua Maria Augusta,56");
 
 
 
 
 
 
 
 
