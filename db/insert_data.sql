/* Insertar talles */
insert into sizes (cm, uk, us, eur)
values (25, 6, 6.5, 39);
values (26, 7, 8, 40.5);


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
insert into products (name, description, image, price)
values (
    'Adidas Gran Prix', 
    'diseño ultra moderno y su suela air top es ideal para running',
    'zapa-adidas-azul.jpg',
    36217
  );
insert into products (name, description, image, price, size_id, category_id, brand_id)
values (
    'Adidas Galaxi 5', 
    'diseño ultra moderno y su suela air top es ideal para running',
    'zapa-adidas-blanca.jpg',
    36217,
    1,
    1,
    1
  );


/*Insertar pais*/
insert into countries (name)
values ('Argentina');
insert into countries (name)
values ('Colombia');

/*Insertar rol*/
insert into roles (name)
values ('user');
insert into roles (name)
values ('admin');

/* Insertar nuevo usuario */
insert into users (firstName, lastName, email, image, password, role_id)
values (
    'Jhon',
    'Doe',
    'doe@gmail.com',
    'avatar-1677950424639',
    '$2a$10$aXbI3VkW/Pfo8kFlmyH9aetdXJo7BrCeFF0YtwIAX3lb1twJbke9u',
    2
  );

insert into users (firstName, lastName, email, image, password, role_id)
values (
    'Claudio',
    'Martinez',
    'martinezclaudio11@hotmail.com',
    'avatar_03.png',
    '$2a$10$aXbI3VkW/Pfo8kFlmyH9aetdXJo7BrCeFF0YtwIAX3lb1twJbke9u',
    1
  );