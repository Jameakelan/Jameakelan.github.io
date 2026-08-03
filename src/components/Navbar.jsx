import { createElement, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpenText,
  Home,
  Mail,
  Menu,
  NotebookPen,
  PanelsTopLeft,
  X,
} from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Projects', href: '#projects', icon: PanelsTopLeft },
  { name: 'Publication', href: '#publications', icon: BookOpenText },
  { name: 'Blog', href: '#blog', icon: NotebookPen },
  { name: 'Contact', href: '#contact', icon: Mail },
]

const NavIcon = ({ icon }) => createElement(icon, {
  'aria-hidden': true,
  size: 16,
  strokeWidth: 1.8,
})

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState(() => window.location.hash || '#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    const onKeyDown = (event) => event.key === 'Escape' && setIsOpen(false)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    const onHashChange = () => setActiveHref(window.location.hash || '#home')
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) setActiveHref(`#${visibleSection.target.id}`)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('hashchange', onHashChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  const navigate = (event, href) => {
    setIsOpen(false)
    setActiveHref(href)
    const target = document.querySelector(href)

    if (target) {
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -28, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
      className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-5xl sm:top-5 sm:w-[calc(100%-2.5rem)]"
    >
      <motion.nav
        aria-label="Primary navigation"
        animate={{
          boxShadow: scrolled
            ? '0 8px 24px rgba(15, 23, 42, 0.08)'
            : '0 3px 12px rgba(15, 23, 42, 0.04)',
        }}
        className="overflow-hidden rounded-[1.75rem] border-2 border-slate-300 bg-white/95 backdrop-blur-xl"
      >
        <div className="flex h-16 items-center justify-between gap-4 px-3 sm:px-4 lg:px-5">
          <a
            href="#home"
            onClick={(event) => navigate(event, '#home')}
            aria-label="Go to home"
            aria-current={activeHref === '#home' ? 'page' : undefined}
            className="group relative flex items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-slate-900 bg-white text-sm font-semibold text-slate-950 transition-colors duration-200 group-hover:bg-slate-50">
              AK
            </span>
            {activeHref === '#home' && (
              <motion.span
                layoutId="brand-active-dot"
                className="absolute -bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-blue-500"
              />
            )}
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(event) => navigate(event, link.href)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.05 }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                aria-current={activeHref === link.href ? 'page' : undefined}
                className={`relative isolate rounded-full border-2 px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-slate-900 lg:px-4 ${
                  activeHref === link.href
                    ? 'border-blue-300 text-blue-700'
                    : 'border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                {activeHref === link.href && (
                  <motion.span
                    layoutId="desktop-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-blue-50"
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <NavIcon icon={link.icon} />
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-full border-2 border-slate-900 bg-white text-slate-950 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  transition={{ duration: 0.16 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-slate-200/80 px-3 pb-3 pt-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(event) => navigate(event, link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                    aria-current={activeHref === link.href ? 'page' : undefined}
                    className={`relative isolate flex items-center justify-between overflow-hidden rounded-2xl border-2 px-4 py-3 text-sm font-medium transition-colors ${
                      activeHref === link.href
                        ? 'border-blue-300 text-blue-700'
                        : 'border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950'
                    }`}
                  >
                    {activeHref === link.href && (
                      <motion.span
                        layoutId="mobile-active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-2xl bg-blue-50"
                      />
                    )}
                    <span className="flex items-center gap-2.5">
                      <NavIcon icon={link.icon} />
                      {link.name}
                    </span>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.6}
                      className={activeHref === link.href ? 'text-blue-600' : 'text-slate-500'}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  )
}

export default Navbar
