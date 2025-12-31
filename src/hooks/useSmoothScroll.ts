import { useCallback } from 'react'
import { useLenis } from '@/components/layout/LenisProvider'

export const useSmoothScroll = () => {
  const lenis = useLenis()

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      if (lenis) {
        lenis.scrollTo(element, {
          offset: -headerOffset,
          duration: 1.1,
          easing: (t) => 1 - (1 - t) * (1 - t),
        })
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }, [lenis])

  return { scrollToSection }
}
