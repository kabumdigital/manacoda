import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Vision from '../components/sections/Vision'
import Manifesto from '../components/sections/Manifesto'
import Programs from '../components/sections/Programs'
import Partners from '../components/sections/Partners'
import Community from '../components/sections/Community'
import Contact from '../components/sections/Contact'
import { buildHomeMeta } from '../lib/seo'

export const Route = createFileRoute('/')({
  meta: () => buildHomeMeta(),
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Vision />
      <Programs />
      <Partners />
      <Community />
    </div>
  )
}
