'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const MaintenanceRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  // List of allowed paths in maintenance mode
  const allowedPaths = ['/maintenance'];
  
  useEffect(() => {
    // If we're not on an allowed path, redirect to the maintenance page
    if (!allowedPaths.includes(pathname) && !pathname.startsWith('/_next/')) {
      router.push('/maintenance');
    }
  }, [pathname, router]);

  return null; // This component doesn't render anything
};

export default MaintenanceRedirect; 