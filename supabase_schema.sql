-- Supabase schema for Inventory App (run in SQL editor)
create table if not exists products (
  id serial primary key,
  name text not null,
  code text,
  category_id int references categories(id),
  provider_id int references providers(id),
  stock integer default 0,
  min_stock integer default 0,
  unit text,
  price numeric,
  location text,
  created_at timestamptz default now()
);

create table if not exists categories (
  id serial primary key,
  name text not null,
  description text,
  created_at timestamptz default now()
);

create table if not exists providers (
  id serial primary key,
  name text not null,
  contact text,
  phone text,
  email text,
  created_at timestamptz default now()
);

create table if not exists alerts (
  id serial primary key,
  product_id int references products(id),
  message text,
  seen boolean default false,
  created_at timestamptz default now()
);

create table if not exists movements (
  id serial primary key,
  product_id int references products(id),
  quantity integer,
  movement_type text, -- 'in' or 'out'
  note text,
  created_at timestamptz default now()
);

create table if not exists profiles (
  id uuid primary key references auth.users(id),
  full_name text,
  role text default 'user',
  created_at timestamptz default now()
);
