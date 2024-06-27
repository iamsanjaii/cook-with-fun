create schema inventoryDB

use inventorydb
create table products(
name varchar(30),
description varchar(100),
price int,
quantity int,
category varchar(100)
)

insert into products values(
"IPhone13", "128GB Starlight", 60000, 2, "Apple"
)

SELECT * FROM products

insert into products values(
"IPhone 15", "256GB Midnight Black", 125000, 4, "Apple"
)
insert into products values(
"OnePlus 8T", "512GB Iron Gray", 80000, 7, "OnePlus"
)
select * from products

UPDATE products set price = 50000 where name = "IPhone13"

delete from products where name = "IPhone13"
select * from products where price > 60000

select * from products where price< 70000
