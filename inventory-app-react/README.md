# Inventory App (React + Supabase)

Este proyecto es una versión lista para conectar a Supabase y desplegar en Netlify.
Incluye las 10 vistas principales (inicio, login, signup, productos, categorias, proveedores, reportes, usuario, configuracion, ayuda).

## Pasos rápidos

1. Crear proyecto en Supabase y ejecutar `schema_supabase.sql` en SQL editor.
2. Obtener `ANON KEY` y `URL` desde Project Settings -> API.
3. Crear variables en Netlify o en local:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
4. Instalar y ejecutar localmente:
   - `npm install`
   - `npm run dev`
5. Para deploy en Netlify:
   - Subir repo a GitHub.
   - Conectar repo en Netlify.
   - Build command: `npm run build`
   - Publish dir: `dist`

