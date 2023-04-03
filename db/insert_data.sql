/* Insertar talles */
insert into sizes (arg, uk, us, eur, cm)
values (36, 4.5, 5.5, 37, 23);
insert into sizes (arg, uk, us, eur, cm)
values (37, 5.5, 6, 38, 24);
insert into sizes (arg, uk, us, eur, cm)
values (38, 6, 6.5, 39, 25);
insert into sizes (arg, uk, us, eur, cm)
values (39, 7, 7.5, 41, 26);
insert into sizes (arg, uk, us, eur, cm)
values (40, 8, 8.5, 42, 26.5);
insert into sizes (arg, uk, us, eur, cm)
values (41, 8.5, 9, 43, 27);
insert into sizes (arg, uk, us, eur, cm)
values (42, 9.5, 10, 44, 28);
insert into sizes (arg, uk, us, eur, cm)
values (43, 10, 10.5, 45, 28.5);
insert into sizes (arg, uk, us, eur, cm)
values (44, 11, 11.5, 46, 29);
insert into sizes (arg, uk, us, eur, cm)
values (45, 11.5, 12, 47, 29.5);


/*Insertar color*/
insert into colors (name)
values ('Azul');
insert into colors (name)
values ('Negro');
insert into colors (name)
values ('Blanco');
insert into colors (name)
values ('Rojo');
insert into colors (name)
values ('Amarillo');
insert into colors (name)
values ('Gris');

/*Insertar brand*/
insert into brands (name)
values ('Adidas');
insert into brands (name)
values ('Nike');
insert into brands (name)
values ('Puma');

/*Insertar tag*/
insert into tags (name)
values ('Deportivo');


/*Insertar categoria*/
insert into categories (name)
values ('Hombre');
insert into categories (name)
values ('Mujer');
insert into categories (name)
values ('Infantil');

/* Insertar producto */
insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Adidas Gran Prix', 
    'Las nuevas ADIDAS GRAN PRIX, cuentan con la última tecnología en materiales, un diseño ultra moderno y su suela air top es ideal para running',
    'zapa-adidas-azul.jpg',
    36217,
    5,
    1,
    1,
    1
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Adidas Galaxi 5', 
    'Las historicas ADIDAS GALAXI 5, son tu mejor opción para tu out fit',
    'zapa-adidas-blanca.jpg',
    48610,
    8,
    1,
    1,
    3
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Nike Jordan 2', 
    'Deportivas 100%, suela de tenis, gran torsión y un material muy duradero',
    'zapa-nike-azul.jpg',
    61500,
    5,
    1,
    2,
    3
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Nike AIR', 
    'Ideales para acompañarte en tus primeros pasos, ultralivianas y comodísimas',
    'zapa-nike-bb.jpg',
    31500,
    1,
    3,
    2,
    2
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Nike AIR', 
    'Ideales para acompañarte en tus primeros pasos, ultralivianas y comodísimas',
    'zapa-nike-bb.jpg',
    31500,
    1,
    3,
    2,
    2
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Adidas Pro', 
    'Diseño innovador, facheras, muy recomendadas para running',
    'zapa-adidas.jpg',
    45720,
    7,
    1,
    1,
    2
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Nike TOP', 
    'Multiuso, liviana y con suela topslice',
    'zapa-nike-blanca.jpg',
    56700,
    3,
    2,
    2,
    3
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Reebok Dreams', 
    'Tu compañia para ir al gim y tus caminatas, con cámara de aire XD12',
    'zapa-reebok-roja.jpg',
    39000,
    2,
    2,
    3,
    4
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Adidas Fly', 
    'Hechas de un nuevo material, que las hace las más livianas del mercado',
    'zapa-adidas2.jpg',
    37500,
    8,
    1,
    1,
    2
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Nike NBA Stars', 
    'Si el basket es tu deporte, estas son tus zapas',
    'zapa-nike-negro.jpg',
    81910,
    6,
    1,
    2,
    2
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Reebok Dark 3', 
    'Para todo tipo de usos, ideales para equipos escolares',
    'zapa-reebok-blanca.jpg',
    60200,
    3,
    1,
    3,
    3
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Nike Court', 
    'Profesionales, con toda la tecnología SportLine',
    'zapa-nike-roja.jpg',
    58430,
    3,
    2,
    2,
    4
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Nike All Star', 
    'Aptas para tenis, sólidas y muy cómodas',
    'zapa-nike-negra.jpg',
    44350,
    5,
    2,
    2,
    2
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Reebok Sports', 
    'Deportivas, excelente calze y de gran contención para tu pie',
    'zapa-reebok-azul-bb.jpg',
    44600,
    1,
    3,
    3,
    3
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Adidas ExtraPlus', 
    'De cuero orgánico, reforzadas y super duraderas',
    'zapa-adidas-rojo-bb.jpg',
    22820,
    1,
    3,
    1,
    4
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Adidas 2023', 
    'Lo último en tecnología, todas las mejores sensaciones por conocer',
    'zapa-adidas-azul-bb.jpg',
    29100,
    1,
    3,
    1,
    1
  );

insert into products (name, description, image, price, size_id, category_id, brand_id, color_id)
values (
    'Adidas Pro', 
    'Diseño innovador, facheras, muy recomendadas para running',
    'product-1679770505647.jpg',
    55555,
    4,
    1,
    1,
    2
  );

/*Insertar pais*/
insert into countries (name)
values ('Argentina');
insert into countries (name)
values ('Colombia');
insert into countries (name)
values ('Peru');
insert into countries (name)
values ('Venezuela');
insert into countries (name)
values ('Paraguay');
insert into countries (name)
values ('Brasil');


/*Insertar rol*/
insert into roles (name)
values ('user');
insert into roles (name)
values ('admin');

/* Insertar nuevo usuario */
insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Jhon',
    'Doe',
    'doe@gmail.com',
    'avatar-1677950424639',
    '$2a$10$aXbI3VkW/Pfo8kFlmyH9aetdXJo7BrCeFF0YtwIAX3lb1twJbke9u',
    2,
    2
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Claudio',
    'Martinez',
    'martinezclaudio11@hotmail.com',
    'avatar_02.png',
    '$2a$10$aXbI3VkW/Pfo8kFlmyH9aetdXJo7BrCeFF0YtwIAX3lb1twJbke9u',
    1,
    1
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Mario',
    'Sanchez',
    'mario.sanchez98@gmail.com',
    'avatar_03.png',
    '$2a$10$Ujl7jJ.hP4l9kx4Oglq9K.K6zda525TtXW3R1/RFo.ayVobVYp3l2',
    2,
    1
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Facundo',
    'García',
    'fgarcia1990@gmail.com',
    'avatar_04.png',
    'ltg4FLW19X0',
    2,
    1
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Agustina',
    'Alvarez',
    'agustina-alvarez12@hotmail.com',
    'avatar_05.png',
    'FjprOhV',
    1,
    5
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'David',
    'Pena',
    'penadavid.96@hotmail.com',
    'avatar_06.png',
    'bI2LhzLiw5',
    1,
    6
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Francisco',
    'Basualdo',
    'fran.basualdo92@hotmail.com',
    'avatar_07.png',
    '0cd20kjCt1dN',
    1,
    4
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Adriano',
    'Lopez',
    'adrianolopezv@hotmail.com',
    'avatar_08.png',
    'kxy9zeI0',
    1,
    3
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Felicitas',
    'Perez',
    'feli_perez89@gmail.com',
    'avatar_09.png',
    'rBzoyqxn',
    1,
    2
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Agustina',
    'Diaz',
    'adiaz1992@gmail.com',
    'avatar_10.png',
    'Rs0VNfaduHn',
    1,
    2
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Sofia',
    'Rodriguez',
    'rodriguezsofia10@hotmail.com',
    'avatar_11.png',
    'Hs1U44A',
    1,
    6
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Inés',
    'Campora',
    'icampora86@hotmail.com',
    'avatar_12.png',
    'V0nvMt',
    1,
    2
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Camila',
    'Gonzalez',
    'camivgonzalez91@gmail.com',
    'avatar_13.png',
    'KgAibEi8RS',
    2,
    3
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Victoria',
    'Fernandez',
    'victoria.fernandez98@gmail.com',
    'avatar_14.png',
    '13ene4yBhi8',
    1,
    4
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Federica',
    'Perez',
    'fedeperez84@gmail.com',
    'avatar_15.png',
    'Nd1PnkLgWT',
    1,
    2
  );

insert into users (firstName, lastName, email, image, password, role_id, country_id)
values (
    'Juan Cruz',
    'Siryi',
    'juancruzsiryi@gmail.com',
    'default-user.png',
    '$2a$10$D7SYlHWOm/UsywQuKiMUaOojRbimfmoa.2X4ZcFuCNMeuxsZt5Fri',
    1,
    1
  );