'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const maintenanceEnabled = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
const allowedPaths = ['/maintenance'];

const MaintenanceRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!maintenanceEnabled) {
      return;
    }

    if (!allowedPaths.includes(pathname) && !pathname.startsWith('/_next/')) {
      router.replace('/maintenance');
    }
  }, [maintenanceEnabled, pathname, router]);

  return null;
};

export default MaintenanceRedirect;
