import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import Lenis from 'lenis'

type LenisInstance = Lenis | null

const LenisContext = createContext<LenisInstance>(null)

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<LenisInstance>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const instance = new Lenis({
      lerp: 0.12,
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    })

    let rafId = 0
    const raf = (time: number) => {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)
    setLenis(instance)

    return () => {
      cancelAnimationFrame(rafId)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

export const useLenis = () => useContext(LenisContext)
