-- Minimal schema for the project (run in Supabase SQL editor)
create table if not exists profiles (
  id uuid primary key references auth.users (id),
  full_name text
);
create table if not exists products (
  id serial primary key,
  name text not null,
  quantity int default 1
);
