-- Simple supabase schema for inventory app
create table profiles (
  id uuid primary key,
  full_name text
);

create table categories (
  id serial primary key,
  name text not null,
  description text
);

create table providers (
  id serial primary key,
  name text not null,
  phone text
);

create table products (
  id serial primary key,
  code text,
  name text,
  category_id int references categories(id),
  provider_id int references providers(id),
  stock int default 0,
  min_stock int default 0,
  price numeric(10,2),
  location text,
  status text
);