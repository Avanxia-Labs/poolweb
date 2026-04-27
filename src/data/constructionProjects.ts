// src/data/constructionProjects.ts

export type ConstructionCategory =
  | 'NEW_BUILD'
  | 'COMMERCIAL_RENOVATION'
  | 'RESIDENTIAL_RENOVATION'
  | 'PEBBLE_FINISH'
  | 'POOL_SPA_INFINITY';

export interface ConstructionProject {
  id: string;
  category: ConstructionCategory;
  title: string;
  description: string;
  images: string[];
  dimensions?: string;
  features?: string[];
}

export const categoryConfig: Record<ConstructionCategory, {
  label: string;
  color: string;
  description: string;
}> = {
  POOL_SPA_INFINITY: {
    label: 'Pool + Spa Infinity',
    color: '#06B6D4',
    description: 'Luxury pools with infinity edge and spa'
  },
  NEW_BUILD: {
    label: 'New Construction',
    color: '#10B981',
    description: 'Brand new custom pool builds'
  },
  COMMERCIAL_RENOVATION: {
    label: 'Commercial',
    color: '#F59E0B',
    description: 'Commercial pool renovations'
  },
  RESIDENTIAL_RENOVATION: {
    label: 'Residential',
    color: '#F97316',
    description: 'Residential pool renovations'
  },
  PEBBLE_FINISH: {
    label: 'Pebble Finish',
    color: '#8B5CF6',
    description: 'Premium pebble surface installations'
  }
};

// Real projects imported from filesystem assets
export const constructionProjects: ConstructionProject[] = [
  // POOL SPA INFINITY - Moved to top as featured
  {
    id: 'infinity-1',
    category: 'POOL_SPA_INFINITY',
    title: 'Pool & Spa Infinity Edge',
    description: 'Luxury pool and spa combination featuring a stunning infinity edge design.',
    images: [
      '/images/projects/pool-spa-infinity/pool-spa-infinity-3.mp4',
      '/images/projects/pool-spa-infinity/pool-spa-infinity-1.jpeg',
      '/images/projects/pool-spa-infinity/pool-spa-infinity-2.jpeg'
    ]
  },
  // NEW BUILD - Custom Project 1 (New Construction)
  {
    id: 'new-cust-1',
    category: 'NEW_BUILD',
    title: 'Custom Pool Build',
    description: 'A stunning new custom pool construction showcasing our precision engineering and design capabilities.',
    images: [
      '/images/projects/new-construction-1/new-construction-1-1.jpeg',
      '/images/projects/new-construction-1/new-construction-1-2.jpeg',
      '/images/projects/new-construction-1/new-construction-1-3.jpeg',
      '/images/projects/new-construction-1/new-construction-1-4.jpeg',
      '/images/projects/new-construction-1/new-construction-1-5.jpeg'
    ]
  },
  // NEW BUILD - New Pool 24x12 (Split 1)
  {
    id: 'new-pool-sun-1',
    category: 'NEW_BUILD',
    title: 'Pool with Sun Shelf & Waterfall',
    description: 'Custom pool featuring a relaxing sun shelf and elegant waterfall feature.',
    dimensions: "24' x 12'",
    images: ['/images/projects/new-pool-waterfall/new-pool-waterfall-2.jpeg']
  },
  // NEW BUILD - New Pool 24x12 (Split 2)
  {
    id: 'new-pool-sun-2',
    category: 'NEW_BUILD',
    title: 'Sun Shelf Pool Layout',
    description: 'Spacious 24x12 pool design with integrated sun shelf and screen enclosure.',
    dimensions: "24' x 12'",
    images: ['/images/projects/new-pool-waterfall/new-pool-waterfall-1.jpeg']
  },
  // NEW BUILD - New Pool 24x12 (Split 3)
  {
    id: 'new-pool-sun-3',
    category: 'NEW_BUILD',
    title: 'Custom Sun Shelf Design',
    description: 'Modern pool build with focused sun shelf area for ultimate relaxation.',
    dimensions: "24' x 12'",
    images: ['/images/projects/new-pool-waterfall/new-pool-waterfall-3.jpeg']
  },
  // NEW BUILD - New Construction 24x12
  {
    id: 'new-basic-24x12',
    category: 'NEW_BUILD',
    title: 'New Construction 24x12',
    description: 'Efficient and beautiful 24x12 custom pool build.',
    dimensions: "24' x 12'",
    images: ['/images/projects/new-construction-24x12/new-construction-24x12-1.jpeg']
  },
  // NEW BUILD - Custom 2
  {
    id: 'new-cust-2',
    category: 'NEW_BUILD',
    title: 'Custom Pool Project II',
    description: 'Another example of our bespoke pool construction expertise.',
    images: ['/images/projects/new-construction-2/new-construction-2-1.jpeg']
  },
  // NEW BUILD - Custom 3
  {
    id: 'new-cust-3',
    category: 'NEW_BUILD',
    title: 'Custom Pool Project III',
    description: 'Tailored design meeting specific client requirements.',
    images: ['/images/projects/new-construction-3/new-construction-3-1.jpeg']
  },

  // COMMERCIAL RENOVATION
  {
    id: 'comm-reno-1',
    category: 'COMMERCIAL_RENOVATION',
    title: 'Commercial Pool Renovation',
    description: 'Complete renovation of commercial aquatic facilities to meet modern standards.',
    images: [
      '/images/projects/commercial-renovation/commercial-renovation-1.jpeg',
      '/images/projects/commercial-renovation/commercial-renovation-2.jpeg',
      '/images/projects/commercial-renovation/commercial-renovation-3.jpeg',
      '/images/projects/commercial-renovation/commercial-renovation-4.jpeg',
      '/images/projects/commercial-renovation/commercial-renovation-5.jpeg'
    ]
  },

  // RESIDENTIAL RENOVATION
  {
    id: 'res-reno-2',
    category: 'RESIDENTIAL_RENOVATION',
    title: 'Complete Pool Refinish & Tile Renovation',
    description: 'Full residential pool refurbishment by our in-house crew: removed aged plaster, installed new waterline tile and pavers coping, and applied a fresh white quartz finish for a clean, modern look. Swipe through to see the full story: cover, before, during, and after.',
    images: [
      '/images/projects/residential-renovation-2026-04/04-after-pano.jpeg',
      '/images/projects/residential-renovation-2026-04/01-before.jpeg',
      '/images/projects/residential-renovation-2026-04/02-tile-detail.jpeg',
      '/images/projects/residential-renovation-2026-04/03-crew-plastering.jpeg',
      '/images/projects/residential-renovation-2026-04/05-after-steps.jpeg',
      '/images/projects/residential-renovation-2026-04/06-after-water.jpeg'
    ]
  },
  {
    id: 'res-reno-1',
    category: 'RESIDENTIAL_RENOVATION',
    title: 'Residential Renovation',
    description: 'Transforming an existing residential pool into a modern backyard centerpiece.',
    images: [
      '/images/projects/residential-renovation/residential-renovation-1.jpeg',
      '/images/projects/residential-renovation/residential-renovation-2.jpeg',
      '/images/projects/residential-renovation/residential-renovation-3.jpeg'
    ]
  },

  // PEBBLE FINISH
  {
    id: 'pebble-1',
    category: 'PEBBLE_FINISH',
    title: 'Pebble Finish Installation',
    description: 'High-quality pebble finish application for superior durability and aesthetics.',
    images: ['/images/projects/pebble-installation/pebble-installation-1.jpeg']
  }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: ConstructionCategory): ConstructionProject[] => {
  return constructionProjects.filter(project => project.category === category);
};

// Get all categories with their project counts
export const getCategoriesWithCounts = (): Record<ConstructionCategory, number> => {
  const counts = {} as Record<ConstructionCategory, number>;
  Object.keys(categoryConfig).forEach(cat => {
    counts[cat as ConstructionCategory] = getProjectsByCategory(cat as ConstructionCategory).length;
  });
  return counts;
};
