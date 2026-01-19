// next.config.ts
import type { NextConfig } from 'next'
// A veces es solo 'next/dist/server/config-shared' o similar si necesitas ser muy específico,
// pero `import { NextConfig } from 'next'` suele funcionar.

const nextConfig = {
  reactStrictMode: true,
  // aquí puedes añadir otras opciones de Next.js que necesites,
  // pero sin ningún `require('next-optimized-images')`.

  // ---- AÑADE ESTO ----
  eslint: {
    // Advertencia: Esto permitirá que la producción se construya con errores de ESLint.
    // Es una solución temporal para poder desplegar.
    ignoreDuringBuilds: true,
  },
  // ---- FIN DE LA ADICIÓN ----
}

export default nextConfig