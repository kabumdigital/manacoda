import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/Button'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Hero() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-brand-navy relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.35)_40%,rgba(0,0,0,0.65)_100%),url(/hero.png)] bg-cover bg-center"
    >
      {/* Background Pattern (optional) */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-7xl md:text-display-lg font-semibold text-white mb-6 font-display"
        >
          <span className="block">O Futuro da Tecnologia em</span>
          <span className="block text-[#C471B6]">
            Moçambique tem Rosto
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-body-lg text-neutral-gray-300 max-w-3xl mx-auto mb-8"
        >
          Junta-te à comunidade que está a transformar mulheres curiosas em líderes da inovação.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('comunidade')}
            className="bg-brand-navy border rounded-none border-brand-gold"
          >
            Junta-te à Comunidade
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('sobre-nos')}
          className="text-neutral-gray-500 hover:text-brand-pink transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  )
}
