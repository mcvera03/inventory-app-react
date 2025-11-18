# Inventory App - Complete (Ready for Netlify)

This project is a React + Vite frontend connected to Supabase (auth + Postgres).
It includes auth (login/signup/reset), protected routes, CRUD for products, categories and providers,
and a SQL schema file to create the database tables in Supabase.

## How to use

1. Create a Supabase project and copy the `URL` and `anon/public` key.
2. In Netlify (or local), set the environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Run SQL from `supabase_schema.sql` in Supabase SQL editor to create tables.
4. Install & run locally:
   ```bash
   npm install
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

Replace the placeholder images in `public/images/` with your icons (filenames in README there).
