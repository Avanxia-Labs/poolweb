export type PostEntry = {
  slug: string
  heroImage: string
  sectionImage: string
  sectionImage2: string
  title: string
  excerpt: string
  buttonText?: string
  tags?: string[]
  // Main content paragraphs, including conclusion as last item
  content: string[]
  // Section titles corresponding to content paragraphs
  sectionTitles: string[]
  date?: string
  author?: string
}

export const featured: PostEntry = {
  slug: 'an-has-bren-released',
  heroImage: '/images/blog_avoid.png',
  sectionImage: '/images/maintenance-before.png',
  sectionImage2: '/images/problem-pool.png',
  title: 'Pool Maintenance Mistakes: Avoid These Errors for Crystal-Clear Water',
  excerpt:
    'This geometric swimming pool has an attached hot tub with a spill over feature. The pool features a small waterfall into the pool. Ledger stone and tile accent the modern swimming pool design. The pool is guarded by a clear glass fence to overlook the beautiful valley below.',
  buttonText: 'READ ME',
  tags: ['Pool Maintenance', 'Custom Pool Design & Construction'],
  sectionTitles: [
    'Don’t Mix Chemicals Haphazardly',
    'Don’t Use Low-Quality or Expired Products',
    'Don’t Let Dirt Build Up',
    'Conclusion',
  ],
content: [
  "Adding pool chemicals out of order—or worse, all at once—can cancel out their effectiveness and even spark dangerous reactions. Always follow this sequence:\n\n1. Balance your pH.\n2. Add algicide.\n3. Apply flocculant.\n4. Finally, dose the chlorine for your pool.\n\nMixing, for example, algicide and flocculant or shock treatment at the same time can reduce disinfecting power and damage pumps and filters.",
  "Cheap, generic pool products or those past their expiration date won’t perform as needed and may leave harmful residues.\n\n• Choose reputable brands such as Nautilus, Pool Quality or CrystalClor.\n• Check the date on every bottle of algicide, flocculant or chlorine shock before you use it.",
  "Leaves, insects and debris in the skimmers and on the pool bottom force your filtration system to work harder and drive up energy costs.\n\n• Empty skimmer baskets and vacuum the floor regularly.\n• Excessive buildup may require a shock treatment or even a full water change—both expensive fixes you want to avoid.",
  "Avoiding these common errors in pool cleaning and pool maintenance will help you keep crystal-clear water, extend the life of your equipment, and save on chemicals and energy.\n\nPool Quality offers customized maintenance plans, expert technical advice, and the best pool products on the market.",
],
  date: 'May 10, 2025',
  author: 'Dr. Jane Doe',
}

export const posts: PostEntry[] = [
//   {
//     slug: 'swimming-pool-filter-101',
//     heroImage: '/images/custom_comparative.png',
//     sectionImage: '/images/custom_comparative.png',
//     sectionImage2: '/images/custom_comparative.png',
//     title: 'Swimming Pool Filter 101',
//     excerpt:
//       'Keeping your swimming pool clean is the most essential part of pool ownership. The circulation of water allows the pool chemicals to keep the water sanitized and crystal clear.',
//     tags: ['Pool Maintenance'],
//     sectionTitles: [
//       'Don’t Mix Chemicals Haphazardly',
//       'Don’t Use Low-Quality or Expired Products',
//       'Don’t Let Dirt Build Up',
//       'Conclusion',
//     ],
//     content: [
//       'En esta guía aprenderás por qué los filtros son vitales para la calidad del agua.',
//       'Existen varios tipos de filtros: arena, cartucho y diatomeas, cada uno con ventajas…',
//       'Paso a paso para elegir e instalar tu filtro y recomendaciones de mantenimiento.',
//       'En conclusión: Un filtro bien elegido y mantenido prolonga la vida útil de tu equipo y garantiza un agua siempre cristalina y segura para tus baños.',
//     ],
//     date: 'April 20, 2025',
//     author: 'Pool Expert',
//   },
//   {
//     slug: 'balance-ph-levels',
//     heroImage: '/images/custom_comparative.png',
//     sectionImage: '/images/custom_comparative.png',
//     sectionImage2: '/images/custom_comparative.png',
//     title: 'How to Balance pH Levels',
//     excerpt:
//       'To keep your pool healthy, monitoring and adjusting pH is crucial. Learn step-by-step how to test and balance the pH for crystal-clear water.',
//     tags: ['Diagnostics & Troubleshooting'],
//     sectionTitles: [
//       'Don’t Mix Chemicals Haphazardly',
//       'Don’t Use Low-Quality or Expired Products',
//       'Don’t Let Dirt Build Up',
//       'Conclusion',
//     ],
//     content: [
//       'El pH ideal de una piscina está entre 7.2 y 7.8. Si sube o baja de ese rango…',
//       'Usa kits de prueba o tiras para medir: anota cada lectura y ajusta con incrementadores o reductores de pH.',
//       'Consejos avanzados: cómo estabilizar el pH a largo plazo y evitar picos bruscos.',
//       'En conclusión: Mantener el pH en el rango adecuado previene la proliferación de algas, protege el equipo y mejora la eficacia de los desinfectantes.',
//     ],
//     date: 'May 1, 2025',
//     author: 'Chemistry Guru',
//   },
//   {
//     slug: 'pool-automation-systems',
//     heroImage: '/images/automation-showcase.png',
//     sectionImage: '/images/automation-showcase.png',
//     sectionImage2: '/images/automation-showcase.png',
//     title: 'Top Pool Automation Systems',
//     excerpt:
//       'Discover the latest in pool automation. From smart timers to remote controls, these systems will simplify your pool maintenance.',
//     tags: ['Custom Pool Design & Construction'],
//     sectionTitles: [
//       'Don’t Mix Chemicals Haphazardly',
//       'Don’t Use Low-Quality or Expired Products',
//       'Don’t Let Dirt Build Up',
//       'Conclusion',
//     ],
//     content: [
//       'La automatización facilita tareas como el encendido/apagado y la dosificación de químicos.',
//       'Sistemas basados en temporizadores, sensores y apps que ofrecen control remoto.',
//       'Comparativa entre marcas y recomendaciones según presupuesto.',
//       'En conclusión: Integrar un sistema de automatización optimiza recursos, ahorra tiempo y garantiza un mantenimiento constante sin esfuerzo manual.',
//     ],
//     date: 'March 15, 2025',
//     author: 'Automation Specialist',
//   },
//   {
//     slug: 'winterize-your-pool',
//     heroImage: '/images/custom_comparative.png',
//     sectionImage: '/images/automation-showcase.png',
//     sectionImage2: '/images/automation-showcase.png',
//     title: 'Winterizing Your Pool',
//     excerpt:
//       'Don’t let cold weather damage your pool. Follow our complete guide to winterize your pool and protect your equipment all season long.',
//     tags: ['Pool Maintenance'],
//     sectionTitles: [
//       'Don’t Mix Chemicals Haphazardly',
//       'Don’t Use Low-Quality or Expired Products',
//       'Don’t Let Dirt Build Up',
//       'Conclusion',
//     ],
//     content: [
//       'Cómo bajar el nivel del agua y drenar las tuberías para evitar heladas.',
//       'Productos recomendados para invernaje y limpieza previa.',
//       'Pasos para reabrir tu piscina en primavera sin problemas.',
//       'En conclusión: Un buen invernaje previene daños costosos, facilita la reapertura y asegura que tu piscina esté lista para usar tan pronto mejoren las temperaturas.',
//     ],
//     date: 'October 5, 2024',
//     author: 'Winter Care Pro',
//   },
//   {
//     slug: 'pool-vacuum-guide',
//     heroImage: '/images/custom_comparative.png',
//     sectionImage: '/images/automation-showcase.png',
//     sectionImage2: '/images/automation-showcase.png',
//     title: 'Choosing the Right Pool Vacuum',
//     excerpt:
//       'A good vacuum makes all the difference. We review the best manual and robotic pool vacuums on the market.',
//     tags: ['Pool Cleaning'],
//     sectionTitles: [
//       'Don’t Mix Chemicals Haphazardly',
//       'Don’t Use Low-Quality or Expired Products',
//       'Don’t Let Dirt Build Up',
//       'Conclusion',
//     ],
//     content: [
//       'Tipos de aspiradoras: manuales, de succión y robóticas.',
//       'Ventajas y desventajas de cada modelo según tamaño de piscina.',
//       'Consejos de mantenimiento y frecuencia de uso.',
//       'En conclusión: Seleccionar la aspiradora adecuada y un uso regular mantiene tu piscina libre de residuos y prolonga la vida útil de la superficie.',
//     ],
//     date: 'June 10, 2025',
//     author: 'Cleaning Expert',
//   },
//   {
//     slug: 'diy-vs-professional',
//     heroImage: '/images/automation-showcase.png',
//     sectionImage: '/images/automation-showcase.png',
//     sectionImage2: '/images/automation-showcase.png',
//     title: 'DIY vs Professional Maintenance',
//     excerpt:
//       'Should you tackle pool care yourself? We compare costs, time, and results between DIY and hiring a pro.',
//     tags: ['Pool Maintenance'],
//     sectionTitles: [
//       'Don’t Mix Chemicals Haphazardly',
//       'Don’t Use Low-Quality or Expired Products',
//       'Don’t Let Dirt Build Up',
//       'Conclusion',
//     ],
//     content: [
//       'Comparación de costos totales en un año de DIY vs servicio profesional.',
//       'Tiempo dedicado y herramientas necesarias para cada opción.',
//       'Ventajas de contratar profesionales y cuándo es más económico.',
//       'En conclusión: Evaluar tus habilidades, presupuesto y tiempo disponible te ayudará a decidir si haces mantenimiento tú mismo o contratas un experto.',
//     ],
//     date: 'July 22, 2025',
//     author: 'Maintenance Analyst',
//   },
]
