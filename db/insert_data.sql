/* Insertar talles */
insert into sizes (cm, uk, us, eur)
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

/*Insertar brand*/
insert into brands (name)
values ('Adidas');
insert into brands (name)
values ('Nike');

/*Insertar categoria*/
insert into category (name)
values ('Masculino');

/* Insertar producto */
insert into products (name, description, price)
values ('diseño ultra moderno y su suela air top es ideal para running', 36217);


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
insert into users (firstName, lastName, email, password, roleId)
values ('Jhon', 'Doe', 'doe@gmail.com', '$2a$10$aXbI3VkW/Pfo8kFlmyH9aetdXJo7BrCeFF0YtwIAX3lb1twJbke9u', 2);