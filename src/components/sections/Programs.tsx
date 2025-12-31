import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ShineBorder } from '@/components/ui/shine-border'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    title: 'Bootcamp de Introdução à Web:',
    description: 'Inscreve-te na lista de espera',
    accentColor: '#4498D6',
    borderGradient: 'linear-gradient(90deg, #508677 0%, #4498D6 100%)',
    shineColors: ['#508677', '#4498D6'],
  },
  {
    title: "Hackathon 'Soluções para Maputo':",
    description: 'Junta a tua equipa e cria impacto.',
    accentColor: '#C471B6',
    borderGradient: 'linear-gradient(120deg, #C471B6 0%, #BCA075 100%)',
    shineColors: ['#C471B6', '#BCA075'],
  },
  {
    title: 'Live Q&A:',
    description: "'Como conseguir o primeiro emprego em Tech em 2025'.",
    accentColor: '#BCA075',
    borderGradient: 'linear-gradient(120deg, #BCA075 0%, #C471B6 100%)',
    shineColors: ['#BCA075', '#C471B6'],
  },
]

export default function Programs() {
  return (
    <section id="programas" className="py-20 bg-[#272356] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal variants={fadeInUp}>
          <div className="text-center mb-10">
            <p className="text-[#FDAF3D] text-lg md:text-xl font-semibold mb-4">
              O que vem por aí?
            </p>
            <h2 className="text-3xl md:text-heading-xl font-bold text-neutral-gray-300 mb-2 font-display">
              Programas e Eventos
            </h2>
            <p className="text-[#4498D6] text-lg">Brevemente</p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-4"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div
                className="relative h-full overflow-hidden p-[2px]"
                style={{
                  ['--accent-color' as string]: program.accentColor,
                  backgroundImage:
                    program.borderGradient ||
                    'linear-gradient(120deg, var(--accent-color), rgba(255,255,255,0.18))',
                }}
              >
                <ShineBorder
                  borderWidth={2}
                  shineColor={program.shineColors ?? program.accentColor}
                  className="rounded-none z-10"
                />
                <div className="relative h-full bg-brand-navy-light p-8 ring-1 ring-brand-navy/60 transition-colors duration-300 hover:bg-brand-navy flex flex-col z-10">
                  <h3 className="text-2xl font-semibold leading-tight mb-6 max-w-[12ch] min-h-[5.75rem] text-[var(--accent-color)]">
                    {program.title}
                  </h3>
                  <p className="text-neutral-gray-100 text-lg leading-relaxed flex-grow">
                    {program.description}
                  </p>
                  <div className="flex justify-start mt-10">
                    <ArrowRight className="text-[var(--accent-color)]" size={28} strokeWidth={2.4} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
