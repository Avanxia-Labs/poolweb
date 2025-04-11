"use client"
import { useIsMobile } from '@/hooks/useIsMobile'
import DesktopPage from '@/components/DesktopPage'
import MobilePage from '@/components/MobilePage'
import DesktopNotFound from './DesktopNotFound'
import MobileNotFound from './MobileNotFound'


/**
 * Renders either the mobile or desktop version of the Not-Found Page
 * depending on the viewport width. Rendering is deferred until
 * hydration to avoid visual flickering during initial load.
 */
export default function Page() {
  const [isMobile, hydrated] = useIsMobile();

  // Avoids rendering until hydration is complete and screen size is determined
  if (!hydrated || isMobile === null) {
    return null;
  }

  // Conditionally renders based on the screen size
  return isMobile ? <MobileNotFound /> : <DesktopNotFound />;
}
