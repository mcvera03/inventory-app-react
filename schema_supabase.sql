-- schema
create table categories (id bigserial primary key, name text not null);
create table providers (id bigserial primary key, name text not null);
create table products (id bigserial primary key, name text not null, code text, category_id bigint references categories(id), provider_id bigint references providers(id), stock_actual integer default 0, stock_minimo integer default 0, precio_unitario numeric);
create function total_stock() returns bigint language sql stable as $$ select coalesce(sum(stock_actual),0) from products; $$;