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
    id: 'project-3',
    image: '/images/projects/pool-spa-infinity/pool-spa-infinity-1.jpeg',
    category: 'INFINITY',
    title: "Infinity Edge Spa",
    subtitle: 'Luxury pool and spa combination',
  },
  {
    id: 'project-1',
    image: '/images/projects/new-construction-1/new-construction-1-1.jpeg',
    category: 'NEW_BUILD',
    title: "Custom Pool Build",
    subtitle: 'Premium residential construction',
  },
  {
    id: 'project-2',
    image: '/images/projects/commercial-renovation/commercial-renovation-1.jpeg',
    category: 'RENOVATION',
    title: "Commercial Modernization",
    subtitle: 'Hotel pool complete renovation',
  },
  {
    id: 'project-4',
    image: '/images/projects/new-pool-waterfall/new-pool-waterfall-1.jpeg',
    category: 'NEW_BUILD',
    title: "Sun Shelf & Waterfall",
    subtitle: "24' x 12' Custom Design",
  },
  {
    id: 'project-5',
    image: '/images/projects/residential-renovation/residential-renovation-1.jpeg',
    category: 'RENOVATION',
    title: "Residential Transformation",
    subtitle: 'Backyard oasis makeover',
  },
  {
    id: 'project-6',
    image: '/images/projects/pebble-installation/pebble-installation-1.jpeg',
    category: 'PEBBLE',
    title: "Pebble Finish",
    subtitle: 'High-durability surface installation',
  },
];
