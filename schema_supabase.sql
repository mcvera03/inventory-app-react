-- minimal schema
create table if not exists categories (id serial primary key, name text not null, description text);
create table if not exists providers (id serial primary key, name text not null, contact text, phone text, email text);
create table if not exists products (id serial primary key, code text, name text not null, category_id integer references categories(id), provider_id integer references providers(id), stock integer default 0, price numeric(12,2));
