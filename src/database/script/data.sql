use proyecto;

insert into user_category (Ucategory_id, Ucategory_name) values (1, 'Usuarios');
insert into user_category (Ucategory_id, Ucategory_name) values (2, 'Administrador');
insert into user_category (Ucategory_id, Ucategory_name) values (3, 'Prueba');
insert into user_category (Ucategory_id, Ucategory_name) values (4, 'Desarrolladores');


insert into trademark (trademark_id, trademark_name) values (1, 'Hasbro');
insert into trademark (trademark_id, trademark_name) values (2, 'Toys');
insert into trademark (trademark_id, trademark_name) values (3, 'Matel');
insert into trademark (trademark_id, trademark_name) values (4, 'Play-Doo');
insert into trademark (trademark_id, trademark_name) values (5, 'Barbie');
insert into trademark (trademark_id, trademark_name) values (6, 'Hollwees');
insert into trademark (trademark_id, trademark_name) values (7, 'Zava');
insert into trademark (trademark_id, trademark_name) values (8, 'Omba');
insert into trademark (trademark_id, trademark_name) values (9, 'Yakidoo');
insert into trademark (trademark_id, trademark_name) values (10, 'Tazzy');


insert into product_category (Pcategory_id, Pcategory_name) values (1, '0-2 Años');
insert into product_category (Pcategory_id, Pcategory_name) values (2, '2-5 Años');
insert into product_category (Pcategory_id, Pcategory_name) values (3, '5-7 Años');
insert into product_category (Pcategory_id, Pcategory_name) values (4, '7-10 Años');
insert into product_category (Pcategory_id, Pcategory_name) values (5, '10-12 Años');
insert into product_category (Pcategory_id, Pcategory_name) values (6, '12-14 Años');



insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (1, 'Muñecas', 'velit donec diam neque vestibulum eget vulputate ut ultrices vel', 68, 'default.png', 1, 1);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (2, 'Carros', 'lacinia aenean sit amet justo morbi ut odio cras mi', 98, 'default.png', 2, 2);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (3, 'Pelotas', 'quam suspendisse potenti nullam porttitor lacus at turpis donec posuere', 42, 'default.png', 3, 3);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (4, 'Plastilina', 'ac leo pellentesque ultrices mattis odio donec vitae nisi nam', 40, 'default.png', 4, 4);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (5, 'Figuras de accion', 'mauris vulputate elementum nullam varius nulla facilisi cras non velit', 26, 'default.png', 5, 5);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (6, 'Peluches', 'integer a nibh in quis justo maecenas rhoncus aliquam lacus', 32, 'default.png', 6, 6);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (7, 'Sonajeros', 'adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus', 69, 'default.png', 1, 1);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (8, 'Barcos', 'odio cras mi pede malesuada in imperdiet et commodo vulputate', 48, 'default.png', 2, 2);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (9, 'Juegos de mesa', 'in faucibus orci luctus et ultrices posuere cubilia curae nulla', 33, 'default.png', 3, 3);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (10, 'Aros', 'scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec', 15, 'default.png', 4, 4);


insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (1, 'Kirsteni', 'Keel', 'kkeel0@lige.com', 'default.png', 'LhAcenIfpwd8',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (2, 'Brigham', 'Frisdick', 'bfrik1@oaic.gov.au', 'default.png', 'YK5LD2qX',2);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (3, 'Tristam', 'Bryett', 'tbrt2@imdb.com', 'default.png', 'OOH35t',3);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (4, 'Edwin', 'Pibsworth', 'epibsh3@posterous.com', 'default.png', 'jTAxshi5ABR',4);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (5, 'Brew', 'Sifflett', 'bsifflett4@skyrock.com', 'default.png', 'YjEPIaXq5y',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (6, 'Aeriela', 'Minghi', 'aminghi5@phpbb.com', 'default.png', 'YY2AR5zrcDr',2);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (7, 'Charmaine', 'Sawfoot', 'csawfoot6@stumbleupon.com', 'default.png', 'cwGRPsM',3);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (8, 'Michal', 'Ramshaw', 'mramshaw7@yahoo.com','default.png', 'ECeexu',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (9, 'Cathyleen', 'Musk', 'cmusk8@blinklist.com', 'default.png', '2jFxe0aH',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (10, 'Claire', 'Perott', 'cperott9@tamu.edu', 'default.png', 'LvUApptceWJA',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (11, 'Bartel', 'Valerio', 'bvaioa@xrea.com','default.png', 'Wy3KAcRrHXna',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (12, 'Reidar', 'Mannock', 'rmanckb@plala.or.jp', 'default.png', '9Oe2Esvcs9Fu',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (13, 'Pace', 'Sheryn', 'pshenc@ustream.tv', 'default.png', 'PP2RCanDXyx',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (14, 'Ellis', 'Demcik', 'edemkd@ning.com', 'default.png', 'SK53fsKJsSed',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (15, 'Harriot', 'Loding', 'hlonge@intel.com', 'default.png', 'vR2IcOc',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (16, 'Drugi', 'Cornuau', 'dcornuemailf@sakura.ne.jp', 'default.png', 'MTzL513fq',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (17, 'Nial', 'Aikenhead', 'naikeadg@xing.com','default.png', 'fdsLfDVD',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (18, 'Gennifer', 'Blint', 'gblinth@eventbrite.com', 'default.png', '6MLQQBX7L57W',1);
insert into users (user_id, first_name, last_name, email, image, password, Ucategory_id) values (19, 'Tiphanie', 'Monckton', 'ttoni@nymag.com', 'default.png', 'ZqlMNz',1);



insert into shopping_cart (cart_id, total_products, total_price, user_id) values (1, 27, '8.07',1);
insert into shopping_cart (cart_id, total_products, total_price, user_id) values (2, 14, '0.91',2);
insert into shopping_cart (cart_id, total_products, total_price, user_id) values (3, 74, '5.39',3);
insert into shopping_cart (cart_id, total_products, total_price, user_id) values (4, 74, '8.82',4);
insert into shopping_cart (cart_id, total_products, total_price, user_id) values (5, 34, '1.22',5);
insert into shopping_cart (cart_id, total_products, total_price, user_id) values (6, 18, '6.82',6);
insert into shopping_cart (cart_id, total_products, total_price, user_id) values (7, 53, '2.36',7);
insert into shopping_cart (cart_id, total_products, total_price, user_id) values (8, 60, '2.77',8);
insert into shopping_cart (cart_id, total_products, total_price, user_id) values (9, 52, '4.09',9);
insert into shopping_cart (cart_id, total_products, total_price, user_id) values (10, 99, '8.61',10);


insert into cart_detail (detail_id, products_name, cart_id, product_id) values (1, 'Juguetes plasticos', 1, 1);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (2, 'Juguetes metalicos', 2, 2);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (3, 'Balones', 3, 3);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (4, 'Carritos', 4, 4);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (5, 'Peluches', 5, 5);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (6, 'Muñecas plasticas', 6, 6);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (7, 'Rompecabezas', 7, 7);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (8, 'Desarmables', 8, 8);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (9, 'Mamaderas', 9, 9);
