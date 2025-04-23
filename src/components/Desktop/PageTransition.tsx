'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode
}

// For TypeScript: extend the window object
declare global {
  interface Window {
    navigateWithTransition?: (url: string) => void; // Mark as optional with ?
  }
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // On mount, fade in
  useEffect(() => {
    // Small delay to ensure transition is visible
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 250)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Export transition navigation method to window object
  useEffect(() => {
    // Define the navigation function with transition
    const navigateWithTransition = (url: string) => {
      if (pathname === url) return // Do nothing if already on that route
      
      setIsTransitioning(true)
      
      // Wait for transition to finish before navigating
      setTimeout(() => {
        router.push(url)
      }, 10)
    }
    
    // Add to window object for global access
    window.navigateWithTransition = navigateWithTransition
    
    return () => {
      // Clean up when unmounting
      delete window.navigateWithTransition
    }
  }, [pathname, router])
  
  return (
    <div 
      className="transition-opacity duration-150 ease-in-out w-full"
      style={{ 
        opacity: isTransitioning ? 0.25 : isLoaded ? 1 : 0
      }}
    >
      {children}
      
      {/* Overlay to prevent interactions during transition */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-transparent z-50" />
      )}
    </div>
  )
}

export default PageTransition