-- Schema for inventory app
create table if not exists profiles (
  id uuid primary key references auth.users(id),
  full_name text,
  created_at timestamptz default now()
);

create table if not exists categories (
  id serial primary key,
  name text not null
);

create table if not exists providers (
  id serial primary key,
  name text not null,
  contact text,
  phone text
);

create table if not exists products (
  id serial primary key,
  code text,
  name text,
  category_id int references categories(id),
  provider_id int references providers(id),
  stock int default 0,
  min_stock int default 0,
  price numeric(10,2),
  location text,
  created_at timestamptz default now()
);