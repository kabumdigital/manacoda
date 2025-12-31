import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'sobre-nos', label: 'Sobre Nós' },
  { id: 'programas', label: 'Programas' },
  { id: 'parceiros', label: 'Parceiros' },
  { id: 'comunidade', label: 'Comunidade' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()
  const activeSection = useScrollSpy({
    sectionIds: navItems.map((item) => item.id),
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[80] transition-all duration-300',
          isScrolled
            ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <a href="/" className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="MANA CODA"
                className="h-10 w-auto"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'text-sm font-medium transition-colors relative',
                  activeSection === item.id
                    ? 'text-brand-pink'
                    : 'text-neutral-gray-300 hover:text-white'
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-pink"
                  />
                )}
              </button>
            ))}
            <Button
              variant="gold"
              size="sm"
              onClick={() => handleNavClick('comunidade')}
              className="rounded-none border-brand-gold text-white py-3"
            >
              Junta-te à Comunidade
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full bg-brand-navy z-[90] md:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <img
                  src="/logo.svg"
                  alt="MANA CODA"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      'text-left text-lg font-medium py-2 transition-colors',
                      activeSection === item.id
                        ? 'text-brand-pink'
                        : 'text-neutral-gray-300'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => handleNavClick('comunidade')}
                  className="mt-4"
                >
                  Junta-te à Comunidade
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
