create database school;
 use school;
 
 create table alunos
 (id_aluno int primary key auto_increment, 
 nome varchar(255), 
 idade int);
 
 create table cursos(
 id_curso int primary key auto_increment, 
 nome_curso varchar(255), 
 carga_horaria int);
 
 create table matricula(
 id_matricula int primary key auto_increment, 
 id_alunos int, 
 id_curso int, 
 data_matricula int);
 
 insert into alunos values (
 1, 
 "Paulo",
 "25");
 
 truncate table matricula
 

