create table Produtos2(
id_produto int UNIQUE,
nome varchar(255),
preço float,
qtde int
);

INSERT INTO produtos2 VALUES(
001, "Alicate", 27.40, 3),
(002, "Martelo", 17.20, 2),
(003, "Chave de Fenda", 12,50);