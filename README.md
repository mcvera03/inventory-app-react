Inventory App - Vite + React + Supabase

Setup:
1. Copy .env.example to .env and add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
2. Run SQL in schema_supabase.sql in Supabase SQL editor to create tables.
3. (Optional) Create two SQL functions in Supabase for stock updates:
   create function increment_stock(pid int, qty int) returns void as $$
     update products set stock = stock + qty where id = pid;
   $$ language SQL;
   create function decrement_stock(pid int, qty int) returns void as $$
     update products set stock = stock - qty where id = pid;
   $$ language SQL;
4. npm install
5. npm run dev

Deploy to Netlify:
- Build command: npm run build
- Publish directory: dist
- Add env vars in Netlify UI
