import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { ShineBorder } from '@/components/ui/shine-border'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const ecosystemItems = [
  {
    title: 'Podcast: Ela Coda Talks 🎧',
    description: 'Histórias sem filtros, conversas inspiradoras e dicas de carreira.',
    accentColor: '#BCA075',
    borderGradient: 'linear-gradient(90deg, #508677 0%, #4498D6 100%)',
    shineColors: ['#508677', '#4498D6'],
  },
  {
    title: 'Magazine "ELA CODA" 📖',
    description: 'A nossa revista trimestral com pesquisas, entrevistas e tendências.',
    accentColor: '#C471B6',
    borderGradient: 'linear-gradient(120deg, #C471B6 0%, #BCA075 100%)',
    shineColors: ['#C471B6', '#BCA075'],
  },
  {
    title: 'Newsletter 💌',
    description: 'Bolsas de estudo, vagas de emprego e novidades direto no teu email.',
    accentColor: '#BCA075',
    borderGradient: 'linear-gradient(120deg, #BCA075 0%, #C471B6 100%)',
    shineColors: ['#BCA075', '#C471B6'],
  },
]

export default function Community() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section
      id="comunidade"
      className="relative overflow-visible py-56 bg-[#272356]"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_left,#ffffff10_0,transparent_30%),radial-gradient(circle_at_bottom_right,#ffffff08_0,transparent_28%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-15" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px))', backgroundSize: '80px 80px' }} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-32">
          <ScrollReveal variants={fadeInUp} className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight font-display md:whitespace-nowrap">
              O Ecossistema
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-brand-gold leading-tight font-display md:whitespace-nowrap">
              MANA CODA
            </p>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ecosystemItems.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="h-full"
              >
                <div
                  style={{
                    ['--accent-color' as string]: item.accentColor,
                    backgroundImage:
                      item.borderGradient ||
                      'linear-gradient(120deg, var(--accent-color), rgba(255,255,255,0.18))',
                  }}
                  className="relative h-full overflow-hidden p-[1px]"
                >
                  <ShineBorder
                    borderWidth={2}
                    shineColor={item.shineColors ?? item.accentColor}
                    className="rounded-none z-10"
                  />
                  <div className="relative bg-brand-navy h-full z-10">
                    <div className="px-7 py-7 md:px-8 md:py-8 text-white min-h-[220px] flex flex-col gap-5 justify-between">
                      <div className="flex flex-col gap-5">
                        <div className="flex items-start gap-4">
                          <span className="mt-1 block h-12 w-[3px] bg-[var(--accent-color)]" />
                          <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-neutral-gray-100 text-lg md:text-xl leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative flex justify-center">
          <div
            className="relative w-full lg:w-[60%] overflow-hidden p-px"
            style={{ backgroundImage: 'linear-gradient(90deg,#508677_0%,#4498D6_100%)' }}
          >
            <ShineBorder
              borderWidth={2}
              shineColor={['#508677', '#4498D6']}
              className="rounded-none z-10"
            />
            <div
              className="relative overflow-hidden px-6 sm:px-20 py-10 lg:py-12 z-10"
              style={{ backgroundColor: '#081F35' }}
            >
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src="/sq_p_1.png"
                  alt=""
                  className="absolute left-0 top-0 h-20 sm:h-24 md:h-28 w-auto max-w-none opacity-90 object-contain"
                />
                <img
                  src="/sq_p_2.png"
                  alt=""
                  className="absolute right-0 bottom-0 h-20 sm:h-24 md:h-28 w-auto max-w-none opacity-90 object-contain"
                />
              </div>

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-semibold text-white leading-tight">
                    Faça parte deste <span className="text-brand-pink">movimento</span>
                  </h3>
                  <p className="text-lg text-neutral-gray-100 mt-3">
                    Junte-se à nossa comunidade
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-brand-navy border rounded-none border-brand-gold"
                  onClick={() => scrollToSection('contacto')}
                >
                  Junta-te à Comunidade
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
