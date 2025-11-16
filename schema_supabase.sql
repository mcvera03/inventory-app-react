create table profiles (id uuid primary key references auth.users(id) on delete cascade, full_name text, role text default 'user', created_at timestamptz default now());
create table categories (id bigserial primary key, name text not null, description text);
create table providers (id bigserial primary key, name text not null, contact text, phone text, email text);
create table products (id bigserial primary key, code text unique, name text not null, category_id bigint references categories(id), provider_id bigint references providers(id), stock_actual integer default 0, stock_minimo integer default 0, unidad_medida text, precio_unitario numeric(12,2), ubicacion text, fecha_ingreso date, estado text default 'Activo');
create function total_stock() returns bigint language sql stable as $$ select coalesce(sum(stock_actual),0) from products; $$;
create function value_inventory() returns numeric language sql stable as $$ select coalesce(sum(stock_actual * precio_unitario),0) from products; $$;
