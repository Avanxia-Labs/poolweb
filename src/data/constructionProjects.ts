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
  },
  POOL_SPA_INFINITY: {
    label: 'Pool + Spa Infinity',
    color: '#06B6D4',
    description: 'Luxury pools with infinity edge and spa'
  }
};

// Placeholder projects - client will send real photos via email
export const constructionProjects: ConstructionProject[] = [
  // NEW BUILD projects
  {
    id: 'new-1',
    category: 'NEW_BUILD',
    title: 'Modern Geometric Pool',
    description: 'Contemporary rectangular pool design with clean lines and minimalist aesthetic.',
    dimensions: "32' x 16'",
    features: ['LED lighting', 'automatic cover', 'salt water system'],
    images: ['/images/pool.png', '/images/pool.png', '/images/pool.png']
  },
  {
    id: 'new-2',
    category: 'NEW_BUILD',
    title: 'Family Resort Pool',
    description: 'Spacious freeform pool perfect for family gatherings and entertainment.',
    dimensions: "28' x 18'",
    features: ['sun shelf', 'waterfall', 'beach entry'],
    images: ['/images/pool.png', '/images/pool.png', '/images/pool.png']
  },
  {
    id: 'new-3',
    category: 'NEW_BUILD',
    title: 'Lap Pool Elite',
    description: 'Professional-grade lap pool for fitness enthusiasts.',
    dimensions: "50' x 12'",
    features: ['swim jets', 'lane markers', 'heating system'],
    images: ['/images/pool.png', '/images/pool.png']
  },

  // COMMERCIAL RENOVATION projects
  {
    id: 'comm-1',
    category: 'COMMERCIAL_RENOVATION',
    title: 'Hotel Pool Modernization',
    description: 'Complete renovation of hotel pool with modern amenities and safety features.',
    dimensions: "60' x 30'",
    features: ['ADA compliant', 'commercial filtration', 'safety lighting'],
    images: ['/images/pool.png', '/images/pool.png', '/images/pool.png']
  },
  {
    id: 'comm-2',
    category: 'COMMERCIAL_RENOVATION',
    title: 'Country Club Refresh',
    description: 'Elegant upgrade to country club pool facilities.',
    dimensions: "45' x 25'",
    features: ['new tile work', 'modern equipment', 'enhanced lighting'],
    images: ['/images/pool.png', '/images/pool.png']
  },

  // RESIDENTIAL RENOVATION projects
  {
    id: 'res-1',
    category: 'RESIDENTIAL_RENOVATION',
    title: 'Backyard Transformation',
    description: 'Complete makeover of an aging pool into a modern oasis.',
    dimensions: "24' x 12'",
    features: ['new plaster', 'updated tile', 'energy-efficient pump'],
    images: ['/images/pool.png', '/images/pool.png', '/images/pool.png']
  },
  {
    id: 'res-2',
    category: 'RESIDENTIAL_RENOVATION',
    title: 'Vintage Pool Revival',
    description: 'Restoring charm while adding modern functionality.',
    dimensions: "30' x 15'",
    features: ['replastering', 'new coping', 'LED conversion'],
    images: ['/images/pool.png', '/images/pool.png']
  },
  {
    id: 'res-3',
    category: 'RESIDENTIAL_RENOVATION',
    title: 'Pool Deck Renovation',
    description: 'New deck and surface work for improved aesthetics and safety.',
    dimensions: "26' x 14'",
    features: ['travertine deck', 'new waterline tile', 'safety rails'],
    images: ['/images/pool.png', '/images/pool.png', '/images/pool.png']
  },

  // PEBBLE FINISH projects
  {
    id: 'peb-1',
    category: 'PEBBLE_FINISH',
    title: 'Caribbean Blue Pebble',
    description: 'Stunning Caribbean blue pebble finish for a tropical feel.',
    dimensions: "22' x 11'",
    features: ['PebbleTec finish', 'color-matched trim', 'UV resistant'],
    images: ['/images/pool.png', '/images/pool.png', '/images/pool.png']
  },
  {
    id: 'peb-2',
    category: 'PEBBLE_FINISH',
    title: 'Natural Stone Pebble',
    description: 'Earth-tone pebble finish blending with natural landscaping.',
    dimensions: "28' x 16'",
    features: ['natural stone blend', 'non-slip texture', 'long durability'],
    images: ['/images/pool.png', '/images/pool.png']
  },

  // POOL SPA INFINITY projects
  {
    id: 'inf-1',
    category: 'POOL_SPA_INFINITY',
    title: 'Hillside Infinity Edge',
    description: 'Breathtaking infinity edge pool with panoramic views.',
    dimensions: "36' x 18'",
    features: ['infinity edge', 'attached spa', 'fire features'],
    images: ['/images/pool.png', '/images/pool.png', '/images/pool.png']
  },
  {
    id: 'inf-2',
    category: 'POOL_SPA_INFINITY',
    title: 'Luxury Spa Combo',
    description: 'Elegant pool and spa combination with spillover feature.',
    dimensions: "32' x 16' + 8' spa",
    features: ['spillover spa', 'infinity edge', 'smart controls'],
    images: ['/images/pool.png', '/images/pool.png', '/images/pool.png']
  },
  {
    id: 'inf-3',
    category: 'POOL_SPA_INFINITY',
    title: 'Resort-Style Infinity',
    description: 'Resort-inspired design with multiple water features.',
    dimensions: "40' x 20'",
    features: ['double infinity', 'integrated spa', 'swim-up bar'],
    images: ['/images/pool.png', '/images/pool.png']
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
