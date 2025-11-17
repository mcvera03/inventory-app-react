-- categories
create table if not exists categories (
  id serial primary key,
  name text not null,
  description text
);

-- providers
create table if not exists providers (
  id serial primary key,
  name text not null,
  contact text,
  phone text,
  email text
);

-- products
create table if not exists products (
  id serial primary key,
  code text,
  name text not null,
  category_id integer references categories(id) on delete set null,
  provider_id integer references providers(id) on delete set null,
  stock integer default 0,
  min_stock integer default 0,
  unit text,
  price numeric(12,2),
  location text,
  entry_date date,
  status text default 'Activo',
  created_at timestamptz default now()
);

-- seed
insert into categories (name, description) values
('Herramientas manuales','Martillos, llaves, destornilladores'),
('Materiales de construcción','Cemento, varilla, cal');

insert into providers (name, contact, phone) values
('Proveedor A', 'Juan', '555-1111'),
('Proveedor B', 'Ana', '555-2222');

insert into products (code,name,category_id,provider_id,stock,price) values
('PRD-001','Tornillo 3/4',1,1,100,12.50),
('PRD-002','Cemento 20kg',2,2,50,150.00);
