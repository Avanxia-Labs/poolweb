//import { useIsMobile } from '@/hooks/useIsMobile'
import DesktopPage from '@/components/DesktopPage'
import MobilePage from '@/components/MobilePage'

export default function Page() {
  
  //const isMobile = useIsMobile()

  // Set isMobile to true to work in MobilePage
  const isMobile = true;

  return isMobile ? <MobilePage /> : <DesktopPage />
}
