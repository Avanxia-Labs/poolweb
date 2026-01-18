export type ProjectCategory = 'NEW_BUILD' | 'RENOVATION' | 'PEBBLE' | 'INFINITY' | 'POOL_SPA';

export interface Project {
  id: string;
  image: string;
  category: ProjectCategory;
  title: string;
  subtitle: string;
}

export const categoryColors: Record<ProjectCategory, string> = {
  NEW_BUILD: '#10B981',
  RENOVATION: '#F59E0B',
  PEBBLE: '#8B5CF6',
  INFINITY: '#06B6D4',
  POOL_SPA: '#EC4899',
};

export const categoryLabels: Record<ProjectCategory, string> = {
  NEW_BUILD: 'NEW BUILD',
  RENOVATION: 'RENOVATION',
  PEBBLE: 'PEBBLE FINISH',
  INFINITY: 'INFINITY EDGE',
  POOL_SPA: 'POOL + SPA',
};

export const projects: Project[] = [
  {
    id: 'project-1',
    image: '/images/pool.png',
    category: 'NEW_BUILD',
    title: "New Construction - 24' x 12'",
    subtitle: 'Sun shelf + waterfall feature',
  },
  {
    id: 'project-2',
    image: '/images/pool.png',
    category: 'RENOVATION',
    title: "Modern Renovation - 30' x 15'",
    subtitle: 'Complete deck and tile upgrade',
  },
  {
    id: 'project-3',
    image: '/images/pool.png',
    category: 'PEBBLE',
    title: "Pebble Finish - 28' x 14'",
    subtitle: 'Caribbean blue pebble surface',
  },
  {
    id: 'project-4',
    image: '/images/pool.png',
    category: 'INFINITY',
    title: "Infinity Edge - 35' x 18'",
    subtitle: 'Panoramic ocean view design',
  },
  {
    id: 'project-5',
    image: '/images/pool.png',
    category: 'POOL_SPA',
    title: "Pool + Spa Combo - 32' x 16'",
    subtitle: 'Integrated hot tub with spillover',
  },
  {
    id: 'project-6',
    image: '/images/pool.png',
    category: 'NEW_BUILD',
    title: "Custom Freeform - 26' x 20'",
    subtitle: 'Natural stone waterfall',
  },
  {
    id: 'project-7',
    image: '/images/pool.png',
    category: 'RENOVATION',
    title: "Classic Renovation - 22' x 10'",
    subtitle: 'New pump and lighting system',
  },
  {
    id: 'project-8',
    image: '/images/pool.png',
    category: 'INFINITY',
    title: "Hillside Infinity - 40' x 20'",
    subtitle: 'Multi-level vanishing edge',
  },
];
