// 'use client'

// import { AnimatePresence, motion, LayoutGroup } from 'framer-motion'
// import { usePathname } from 'next/navigation'
// import { ReactNode } from 'react'

// interface Props {
//   children: ReactNode
// }

// export default function TransitionLayout({ children }: Props) {
//   const pathname = usePathname()
  
//   return (
//     <LayoutGroup>
//       <motion.div
//         key={pathname}
//         initial={{ opacity: 0.98 }}
//         animate={{ opacity: 1 }}
//         transition={{ 
//           duration: 0.85,
//           ease: "linear" 
//         }}
//         className="w-full"
//         layout
//       >
//         {children}
//       </motion.div>
//     </LayoutGroup>
//   )
// }




'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface TransitionLayoutProps {
  children: React.ReactNode
}

export default function TransitionLayout({ children }: TransitionLayoutProps) {
  const pathname = usePathname()
  const [displayedPath, setDisplayedPath] = useState(pathname)
  const [fade, setFade] = useState<'fade-in' | 'fade-out'>('fade-in')

  useEffect(() => {
    if (pathname !== displayedPath) {
      setFade('fade-out')
      const timeout = setTimeout(() => {
        setDisplayedPath(pathname)
        setFade('fade-in')
      }, 700)
      return () => clearTimeout(timeout)
    }
  }, [pathname, displayedPath])

  return (
    <div className={`transition-opacity duration-700 ${fade === 'fade-in' ? 'opacity-100' : 'opacity-87'}`}>
      {children}
    </div>
  )
}
