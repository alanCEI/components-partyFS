# Entornos / ReactJS y ExpressJS

Investigue como realizar la configuracion del build con vercel pero me di cuenta que para los entornos se han indicado opciones con module.exports o separando la url del localhost. Revisando me he dado cuenta que es mejor opcion definir los entornos como en el video de entornos - practica, un poco mas general pero me ayuda a verlo mejor al integrar vercel por ahora. Basado en las actividades de lista de estudiantes en clases resumido para la actividad.

## Iniciar el servidor 'localhost:4000' del API REST Backend e iniciar 'localhost:5173' para el servidor de desarrollo del Frontend, en la carpeta raiz del proyecto con pnpm:

```bash
cd entornos-react-express
pnpm run dev
```

## Para que utilice build con Vercel, en la carpeta raiz del proyecto con pnpm y se crea la carpeta dist en el Frontend:

```bash
cd entornos-react-express
pnpm run build
```

## Inicio para simular y verificar el build en Vercel antes de deploy, usara otra URL local 'localhost:4173':

```bash
cd api
pnpm start

cd frontend
pnpm preview
```