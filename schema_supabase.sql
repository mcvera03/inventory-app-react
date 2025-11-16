-- Supabase / Postgres schema for inventory app

create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  role text default 'user',
  created_at timestamptz default now()
);

create table categories (
  id bigserial primary key,
  name text not null,
  description text,
  created_at timestamptz default now()
);

create table providers (
  id bigserial primary key,
  name text not null,
  contact text,
  phone text,
  email text,
  created_at timestamptz default now()
);

create table products (
  id bigserial primary key,
  code text unique,
  name text not null,
  category_id bigint references categories(id) on delete set null,
  provider_id bigint references providers(id) on delete set null,
  stock_actual integer default 0,
  stock_minimo integer default 0,
  unidad_medida text,
  precio_unitario numeric(12,2),
  ubicacion text,
  fecha_ingreso date,
  estado text default 'Activo',
  created_at timestamptz default now()
);

create table stock_movements (
  id bigserial primary key,
  product_id bigint references products(id) on delete cascade,
  qty integer not null,
  movement_type text check (movement_type in ('IN','OUT')),
  note text,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

create index on products(name);
create index on products(code);
