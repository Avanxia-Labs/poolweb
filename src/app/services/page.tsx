"use client"
import React from 'react'
import { useIsMobile } from '@/hooks/useIsMobile';
import DesktopServicePage from './DesktopServicePage';
import MobileServicePage from './MobileServicePage';

/**
 * Renders either the mobile or desktop version of the page Service
 * depending on the viewport width. Rendering is deferred until
 * hydration to avoid visual flickering during initial load.
 */
function Page() {

  const [isMobile, hydrated] = useIsMobile();

  // Avoids rendering until hydration is complete and screen size is determined
  if (!hydrated || isMobile === null) {
    return null;
  }

  // Conditionally renders based on the screen size
  return isMobile ? <MobileServicePage /> : <DesktopServicePage />;

}

export default Page