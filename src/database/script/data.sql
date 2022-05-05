use proyecto;

insert into user_category (Ucategory_id, Ucategory_name) values (1, 'Usuarios');
insert into user_category (Ucategory_id, Ucategory_name) values (2, 'Administrador');
insert into user_category (Ucategory_id, Ucategory_name) values (3, 'Prueba');
insert into user_category (Ucategory_id, Ucategory_name) values (4, 'Desarrolladores');


insert into trademark (trademark_id, trademark_name) values (1, 'Trilia');
insert into trademark (trademark_id, trademark_name) values (2, 'Livefish');
insert into trademark (trademark_id, trademark_name) values (3, 'Browseblab');
insert into trademark (trademark_id, trademark_name) values (4, 'Shufflester');
insert into trademark (trademark_id, trademark_name) values (5, 'Youopia');
insert into trademark (trademark_id, trademark_name) values (6, 'Brainbox');
insert into trademark (trademark_id, trademark_name) values (7, 'Zava');
insert into trademark (trademark_id, trademark_name) values (8, 'Omba');
insert into trademark (trademark_id, trademark_name) values (9, 'Yakidoo');
insert into trademark (trademark_id, trademark_name) values (10, 'Tazzy');


insert into product_category (Pcategory_id, Pcategory_name) values (1, 'Ferwof');
insert into product_category (Pcategory_id, Pcategory_name) values (2, 'Aluminum');
insert into product_category (Pcategory_id, Pcategory_name) values (3, 'Wood');
insert into product_category (Pcategory_id, Pcategory_name) values (4, 'Stone');
insert into product_category (Pcategory_id, Pcategory_name) values (5, 'Vinyl');
insert into product_category (Pcategory_id, Pcategory_name) values (6, 'Wood');
insert into product_category (Pcategory_id, Pcategory_name) values (7, 'Sertone');
insert into product_category (Pcategory_id, Pcategory_name) values (8, 'Plastic');
insert into product_category (Pcategory_id, Pcategory_name) values (9, 'Granite');
insert into product_category (Pcategory_id, Pcategory_name) values (10, 'Brass');


insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (1, 'Mushroom -', 'velit donec diam neque vestibulum eget vulputate ut ultrices vel', 68, 'https://robohash.org/aliquamsitnon.png?size=50x50&set=set1', 1, 1);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (2, 'Glucose', 'lacinia aenean sit amet justo morbi ut odio cras mi', 98, 'https://robohash.org/reiciendisquiab.png?size=50x50&set=set1', 2, 2);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (3, 'Pasta , Frozen', 'quam suspendisse potenti nullam porttitor lacus at turpis donec posuere', 42, 'https://robohash.org/autemsolutarepudiandae.png?size=50x50&set=set1', 3, 3);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (4, 'Sugar', 'ac leo pellentesque ultrices mattis odio donec vitae nisi nam', 40, 'https://robohash.org/molestiasvoluptatealias.png?size=50x50&set=set1', 4, 4);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (5, 'Bread ', 'mauris vulputate elementum nullam varius nulla facilisi cras non velit', 26, 'https://robohash.org/doloremetsed.png?size=50x50&set=set1', 5, 5);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (6, 'Lamb - Sr', 'integer a nibh in quis justo maecenas rhoncus aliquam lacus', 32, 'https://robohash.org/commodisuntvoluptas.png?size=50x50&set=set1', 6, 6);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (7, 'Artichokd', 'adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus', 69, 'https://robohash.org/omnisoditdoloremque.png?size=50x50&set=set1', 7, 7);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (8, 'Ham -', 'odio cras mi pede malesuada in imperdiet et commodo vulputate', 48, 'https://robohash.org/rationequaeipsum.png?size=50x50&set=set1', 8, 8);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (9, 'Cheese - s', 'in faucibus orci luctus et ultrices posuere cubilia curae nulla', 33, 'https://robohash.org/solutaasperioresquia.png?size=50x50&set=set1', 9, 9);
insert into products (product_id, title, description, price, image, trademark_id, Pcategory_id) values (10, 'Sa', 'scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec', 15, 'https://robohash.org/veritatisestcum.png?size=50x50&set=set1', 10, 10);


insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (1, 'Kirsteni', 'Keel', 'kkeel0@lige.com', 'LhAcenIfpwd8',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (2, 'Brigham', 'Frisdick', 'bfrik1@oaic.gov.au', 'YK5LD2qX',2);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (3, 'Tristam', 'Bryett', 'tbrt2@imdb.com', 'OOH35t',3);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (4, 'Edwin', 'Pibsworth', 'epibsh3@posterous.com', 'jTAxshi5ABR',4);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (5, 'Brew', 'Sifflett', 'bsifflett4@skyrock.com', 'YjEPIaXq5y',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (6, 'Aeriela', 'Minghi', 'aminghi5@phpbb.com', 'YY2AR5zrcDr',2);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (7, 'Charmaine', 'Sawfoot', 'csawfoot6@stumbleupon.com', 'cwGRPsM',3);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (8, 'Michal', 'Ramshaw', 'mramshaw7@yahoo.com', 'ECeexu',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (9, 'Cathyleen', 'Musk', 'cmusk8@blinklist.com', '2jFxe0aH',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (10, 'Claire', 'Perott', 'cperott9@tamu.edu', 'LvUApptceWJA',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (11, 'Bartel', 'Valerio', 'bvaioa@xrea.com', 'Wy3KAcRrHXna',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (12, 'Reidar', 'Mannock', 'rmanckb@plala.or.jp', '9Oe2Esvcs9Fu',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (13, 'Pace', 'Sheryn', 'pshenc@ustream.tv', 'PP2RCanDXyx',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (14, 'Ellis', 'Demcik', 'edemkd@ning.com', 'SK53fsKJsSed',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (15, 'Harriot', 'Loding', 'hlonge@intel.com', 'vR2IcOc',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (16, 'Drugi', 'Cornuau', 'dcornuemailf@sakura.ne.jp', 'MTzL513fq',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (17, 'Nial', 'Aikenhead', 'naikeadg@xing.com', 'fdsLfDVD',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (18, 'Gennifer', 'Blint', 'gblinth@eventbrite.com', '6MLQQBX7L57W',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (19, 'Tiphanie', 'Monckton', 'ttoni@nymag.com', 'ZqlMNz',1);
insert into users (user_id, first_name, last_name, email, password, Ucategory_id) values (20, 'Xever', 'O''Duane', 'xodunej@sohu.com', '07gtTTiVGGZ',1);


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


insert into cart_detail (detail_id, products_name, cart_id, product_id) values (1, 'Sugar - Brown, Individual', 1, 1);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (2, 'Chicken - Wieners', 2, 2);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (3, 'Wine - Fat Bastard Merlot', 3, 3);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (4, 'Crackers - Soda / Saltins', 4, 4);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (5, 'Beer - Original Organic Lager', 5, 5);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (6, 'Beef Flat Iron Steak', 6, 6);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (7, 'Nescafe - Frothy French Vanilla', 7, 7);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (8, 'Wine - Charddonnay Errazuriz', 8, 8);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (9, 'Salt - Sea', 9, 9);
insert into cart_detail (detail_id, products_name, cart_id, product_id) values (10, 'Canadian Emmenthal', 10, 10);

