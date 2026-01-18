# Pool Quality Solutions - Propuesta de Mejora

## Sección de Construcción en Home + Sistema de Portafolio (Carrusel)

---

## 1. Contexto y Objetivo

La web fue pensada originalmente para impulsar principalmente **servicios de mantenimiento**, pero el negocio está migrando a priorizar **Custom Pool Design & Construction**. Hay clientes que ya están pidiendo ver proyectos reales en la página.

### Objetivo Principal

- Que un prospecto pueda entrar al Home y ver **evidencia visual de proyectos de construcción y renovaciones en segundos**
- Mantener **consistencia visual** con el sitio existente y minimizar cambios estructurales agresivos
- **Evitar duplicación de controles (chips)** que aumenten la carga cognitiva en móvil

---

## 2. Ubicación en Home

**Insertar la sección justo ANTES del "Subscription price calculator"**

Esta ubicación es estratégica: el usuario ya viene "caliente" (ya entendió el servicio) y en ese punto le mostramos prueba visual de capacidad de construcción sin desplazar el resto del flujo.

```
[Secciones existentes]
        ↓
[NUEVA SECCIÓN: Design & Construction Projects]
        ↓
[Subscription price calculator]
        ↓
[Resto del contenido]
```

---

## 3. Interacción: NO usar chips dentro del carrusel

Ya existe un control de chips/tabs en la interfaz actual. Si agregamos otro set de chips dentro de la sección de construcción, terminamos con un **doble control** para el usuario.

### Decisión

- ✅ Mantener los chips existentes tal como están
- ✅ Dentro de la nueva sección: **carrusel horizontal + tags en cada tarjeta** (no chips)
- ⏳ El filtrado por categorías se deja para una página dedicada de Projects (fase posterior)

---

## 4. Wireframe - Mobile y Desktop

### Estructura del Módulo

```
┌─────────────────────────────────────────────────┐
│  Design & Construction Projects      View all > │
│  Explore completed work before requesting...    │
├─────────────────────────────────────────────────┤
│ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│ │ NEW BUILD│ │RENOVATION│ │  PEBBLE  │ ...     │
│ │  [img]   │ │  [img]   │ │  [img]   │         │
│ │          │ │          │ │          │         │
│ │ 24'x12'  │ │Residential│ │ Premium  │         │
│ │ New Const│ │ Refresh  │ │ Surface  │         │
│ │[View det]│ │[View det]│ │[View det]│         │
│ └──────────┘ └──────────┘ └──────────┘         │
│            ● ○ ○ ○ (pagination)                 │
└─────────────────────────────────────────────────┘
```

### Características Clave

- **Peek**: Mostrar ~45-50px de la siguiente tarjeta para sugerir scroll horizontal
- **Tags por tarjeta**: NEW BUILD, RENOVATION, PEBBLE, INFINITY, POOL + SPA
- **Sin chips adicionales** dentro del carrusel

---

## 5. Contenido del Carrusel (Mínimo Viable)

El Home no es para clasificación compleja. El objetivo es **"prueba rápida" y deseo**.

### Cantidad: 8-10 imágenes máximo

### Estructura de cada tarjeta

| Elemento | Descripción |
|----------|-------------|
| **Imagen** | Hero image del proyecto |
| **Tag** | New Build / Renovation / Pebble Finish / Infinity Edge |
| **Título** | 1-2 líneas: "New Construction - 24' x 12'" o "Sun shelf & waterfall" |
| **Click** | Abre detalle o lleva al servicio en página de servicios |

### Categorías de Tags

- `NEW BUILD` - Construcciones nuevas
- `RENOVATION` - Renovaciones
- `PEBBLE` / `PEBBLE FINISH` - Acabado pebble
- `INFINITY` / `INFINITY EDGE` - Borde infinito
- `POOL + SPA` - Piscina con spa

---

## 6. Fases de Implementación

### Fase 1: Carrusel en Home (ESTE PROYECTO)
- Agregar la sección del carrusel en Home antes del calculator
- Mobile + Desktop responsive

### Fase 2: Carrusel en Services (ESTE PROYECTO)
- Crear componente carrusel dentro de la página de servicios
- Priorizar el servicio de construcción como el primero en mobile y desktop

### Fase 3: (FUTURO - No incluida)
- Agregar 'Projects' al menú principal
- Galería dedicada a proyectos por categoría
- Calculador de galones solo en servicio de mantenimiento/limpieza

---

## 7. Texto de la Nueva Sección

### Título
```
Design & Construction Projects
```

### Subtítulo
```
Explore completed work before requesting a quote.
```

### CTA
```
View all projects
```

---

## 8. Referencias de UI (Patrones)

- **Contra.com**: Sección + 'View more' + contenido en tarjetas (scroll horizontal)
- **Airbnb**: Tarjetas horizontales con 'peek' y control mínimo

Ambos usan el patrón de carrusel horizontal con 'peek' y CTA 'View more/View all', muy efectivo en móvil y con baja fricción.

---

## 9. Checklist de Ejecución

- [ ] Definir 8-10 fotos (ideal: originales, sin compresión de WhatsApp)
- [ ] Preparar recortes consistentes (misma relación de aspecto) y compresión web (WebP/JPG)
- [ ] Implementar sección en Home antes del calculator (Mobile + Desktop)
- [ ] Configurar CTA 'View all projects' apuntando a la galería (temporal o definitiva)
- [ ] Crear componente de carrusel en services
- [ ] Subdividir carruseles por subtipo de servicios dentro del servicio de construcción
- [ ] Validar y realizar los cambios pertinentes
- [ ] Restaurar página y hosting de la página para que sea accesible online

---

## 10. Notas Técnicas de Implementación

### Archivos a modificar (estimado)

**Home - Desktop:**
- `src/components/DesktopPage.tsx` o similar
- Nueva sección antes de `SubscriptionCalculatorCard`

**Home - Mobile:**
- `src/components/MobilePage.tsx` o similar
- Nueva sección antes del calculator

**Nuevo componente:**
- `src/components/Desktop/ProjectsCarousel.tsx`
- `src/components/Mobile/ProjectsCarousel.tsx`
- O un componente responsive único

**Datos de proyectos:**
- `src/data/projects.ts` (nuevo archivo para los datos de proyectos)

### Dependencias sugeridas
- Puede usarse CSS scroll-snap para el carrusel
- O librería como Embla Carousel / Swiper si se requiere más control

---

## Resumen Visual del Cambio

```
ANTES:
┌─────────────────┐
│   Secciones     │
│   existentes    │
├─────────────────┤
│  Calculator     │
│  de suscripción │
└─────────────────┘

DESPUÉS:
┌─────────────────┐
│   Secciones     │
│   existentes    │
├─────────────────┤
│ ★ NUEVA SECCIÓN │
│   Design &      │
│   Construction  │
│   [Carrusel]    │
├─────────────────┤
│  Calculator     │
│  de suscripción │
└─────────────────┘
```
