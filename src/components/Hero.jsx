import { motion } from 'framer-motion'
import {
  ArrowDown,
  BrainCircuit,
  Code2,
  HeartPulse,
  Rocket,
  Scale,
  Watch,
} from 'lucide-react'

const focusAreas = [
  { label: 'AI Engineering', icon: BrainCircuit },
  { label: 'AI Governance', icon: Scale },
  { label: 'Software Engineering', icon: Code2 },
  { label: 'Digital Health', icon: HeartPulse },
  { label: 'Wearable Sensing', icon: Watch },
  { label: 'Startup', icon: Rocket },
]

const Hero = () => (
  <main id="home" className="flex min-h-screen items-center bg-background px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
    <section aria-labelledby="hero-title" className="mx-auto w-full max-w-5xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 sm:text-sm"
      >
        AI &amp; Software Engineer
      </motion.p>

      <motion.h1
        id="hero-title"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55 }}
        className="text-[clamp(2.35rem,8vw,6.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.065em] text-slate-950"
      >
        <span className="block sm:inline">Ananyot</span>{' '}
        <span className="block sm:inline">Keawlamoon</span>
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto my-8 h-0.5 w-16 rounded-full bg-blue-500 sm:my-10"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.55 }}
        className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
      >
        I design and develop software systems that connect artificial intelligence with digital health. My interests include practical and responsibly governed AI, dependable software, wearable sensing, and turning useful ideas into technology products and startups.
      </motion.p>

      <motion.ul
        aria-label="Areas of focus"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.55 }}
        className="mx-auto mt-9 flex max-w-4xl flex-wrap justify-center gap-2.5 sm:mt-10 sm:gap-3"
      >
        {focusAreas.map((area) => {
          const Icon = area.icon

          return (
            <li
              key={area.label}
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:px-5 sm:text-sm"
            >
              <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
              {area.label}
            </li>
          )
        })}
      </motion.ul>

      <motion.a
        href="#about"
        aria-label="Continue to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="group mx-auto mt-12 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-slate-950 sm:mt-16"
      >
        More about me
        <span className="grid size-9 place-items-center rounded-full border-2 border-slate-300 bg-white transition-transform group-hover:translate-y-1 group-hover:border-slate-900">
          <ArrowDown aria-hidden="true" size={15} strokeWidth={1.8} />
        </span>
      </motion.a>
    </section>
  </main>
)

export default Hero
