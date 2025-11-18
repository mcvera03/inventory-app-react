-- Supabase schema and policies
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS categories (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  des TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS providers (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  address TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  stock INTEGER DEFAULT 0,
  price NUMERIC(10,2) DEFAULT 0,
  id_category BIGINT REFERENCES categories(id) ON DELETE SET NULL,
  id_provider BIGINT REFERENCES providers(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Read own profile"
ON profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Update own profile"
ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Allow read categories"
ON categories FOR SELECT USING (true);
CREATE POLICY "Allow insert categories"
ON categories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow update categories"
ON categories FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow read providers"
ON providers FOR SELECT USING (true);
CREATE POLICY "Allow insert providers"
ON providers FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow update providers"
ON providers FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow read products"
ON products FOR SELECT USING (true);
CREATE POLICY "Allow insert products"
ON products FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow update products"
ON products FOR UPDATE USING (auth.role() = 'authenticated');
