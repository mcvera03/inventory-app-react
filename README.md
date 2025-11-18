# Inventory Management - React + Supabase

This project is a functional inventory web app scaffold (Vite + React) with Supabase integration for Auth and PostgreSQL.

## Quick start (local)

1. Copy `.env.example` to `.env` (or set environment variables)
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY

2. Install
```bash
npm install
```

3. Run dev
```bash
npm run dev
```

## Deploy to Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Set Netlify env vars `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

## Supabase SQL
See `supabase-schema.sql` for the tables and RLS policies used by this project.

