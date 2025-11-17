-- Supabase schema for Inventory App
create table if not exists profiles (
  id uuid primary key,
  full_name text,
  phone text,
  role text default 'user',
  created_at timestamptz default now()
);

create table if not exists categories (
  id serial primary key,
  name text not null,
  description text
);

create table if not exists providers (
  id serial primary key,
  name text not null,
  contact text,
  phone text,
  email text
);

create table if not exists products (
  id serial primary key,
  code text,
  name text not null,
  category_id integer references categories(id),
  provider_id integer references providers(id),
  stock integer default 0,
  price numeric(12,2) default 0,
  created_at timestamptz default now()
);

create table if not exists entries (
  id serial primary key,
  product_id integer references products(id),
  quantity integer not null,
  note text,
  created_at timestamptz default now()
);

create table if not exists exits (
  id serial primary key,
  product_id integer references products(id),
  quantity integer not null,
  note text,
  created_at timestamptz default now()
);

create table if not exists movements (
  id serial primary key,
  product_id integer references products(id),
  type text not null, -- 'entry' or 'exit'
  quantity integer,
  note text,
  created_at timestamptz default now()
);
