import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Link2, Linkedin, Mail } from 'lucide-react'
import { linksData } from '../data/links'

const socialLinks = [
  { name: 'GitHub', href: linksData.github, icon: Github },
  { name: 'LinkedIn', href: linksData.linkedin, icon: Linkedin },
  { name: 'ORCID', href: linksData.orcid, icon: Link2 },
]

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="scroll-mt-28 border-t-2 border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">Contact</p>
        <h2 id="contact-title" className="text-3xl font-semibold uppercase tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
          Let&apos;s work together.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
          Open to research collaborations, software projects, digital health ideas, and conversations about responsible AI.
        </p>
      </motion.div>

      <motion.a
        href={`mailto:${linksData.email}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.12, duration: 0.45 }}
        className="group mx-auto mt-9 inline-flex max-w-full items-center gap-3 rounded-full border-2 border-slate-900 bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-950 hover:text-white sm:px-7 sm:text-base"
      >
        <Mail aria-hidden="true" size={17} strokeWidth={1.8} />
        <span className="truncate">{linksData.email}</span>
        <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </motion.a>

      <motion.nav
        aria-label="Social links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.22, duration: 0.45 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
      >
        {socialLinks.map((link) => {
          const Icon = link.icon

          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-blue-700 sm:text-sm"
            >
              <Icon aria-hidden="true" size={15} strokeWidth={1.7} />
              {link.name}
              <ArrowUpRight aria-hidden="true" size={12} strokeWidth={1.7} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          )
        })}
      </motion.nav>

      <div className="mx-auto mt-14 h-0.5 w-12 rounded-full bg-slate-200" />
      <p className="mt-6 text-[10px] uppercase tracking-[0.14em] text-slate-400">
        © {new Date().getFullYear()} Ananyot Keawlamoon
      </p>
    </div>
  </section>
)

export default Contact
