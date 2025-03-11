use loja;

create table Produto (
idProduto int primary key auto_increment,
Nome varchar(20),
Descrição varchar(40),
Qtd_Disp int,
Preço float
);

create table Venda (
idVenda int primary key auto_increment,
idProduto int,
Qtd_vendida int,
Dt_venda date,
foreign key (idProduto) references Produto(idProduto)
);

insert into Produto values 
("1", "TV", "32 polegada", "15", "1.200"),
("2", "Notebook", "gammer", "20", "2.500"),
("3", "Caixa de Som", "2000w", "10", "1.450");

insert into Venda values
("001", "1", "5", "2025-02-10"),
("002", "2", "15", "2025-01-02"),
("003", "3", "4", "2025-03-05");

select * from Produto;
select * from Venda;

 
 
