create database empresa;
use empresa;

create table funcionarios(
id_funcionarios int auto_increment primary key,
função varchar(45),
setor varchar(45),
idade int,
endereçço varchar(45)
);


alter table funcionarios change column enrdereçço endereço varchar(45);

insert into funcionarios values(
"1",
"opeardor", 
"manufatura", 
45, 
"Rua Maria Amélia"
);

insert into funcionarios values(
"2",
"analista",
"manutnção",
37,
"Rua Augusta"
);

truncate table funcionarios

