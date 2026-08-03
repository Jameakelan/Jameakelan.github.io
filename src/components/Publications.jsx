import { motion } from 'framer-motion'
import { BookOpenText, CalendarDays, ExternalLink } from 'lucide-react'
import { publicationsData } from '../data/publications'

const Publications = () => {
  const publications = [...publicationsData].sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <section id="publications" aria-labelledby="publications-title" className="scroll-mt-28 border-t-2 border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mx-auto mb-5 grid size-11 place-items-center rounded-full border-2 border-slate-900 bg-white">
            <BookOpenText aria-hidden="true" size={20} strokeWidth={1.8} />
          </div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">Research output</p>
          <h2 id="publications-title" className="text-3xl font-semibold uppercase tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
            Publications
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Selected research across artificial intelligence, recommendation systems, and digital health.
          </p>
        </motion.header>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group flex min-h-80 flex-col rounded-[1.5rem] border-2 border-slate-900 bg-white p-5 transition-all hover:-translate-y-1 hover:bg-blue-50/70 hover:shadow-[5px_5px_0_0_#dbeafe] sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400">/{String(index + 1).padStart(2, '0')}</span>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full border-2 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide ${
                    publication.status === 'Published'
                      ? 'border-slate-300 bg-slate-50 text-slate-600'
                      : 'border-blue-300 bg-blue-50 text-blue-700'
                  }`}>
                    {publication.status}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-slate-300 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                    <CalendarDays aria-hidden="true" size={11} strokeWidth={1.8} />
                    {publication.year}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="text-base font-semibold leading-snug tracking-[-0.025em] text-slate-950 sm:text-lg">
                  {publication.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-500">{publication.authors}</p>
                <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{publication.abstract}</p>

                <div className="mt-auto border-t border-slate-200 pt-4">
                  <p className="line-clamp-2 text-[11px] leading-5 text-slate-500">{publication.venue}</p>
                </div>
              </div>

              {Object.keys(publication.links).length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {Object.entries(publication.links).map(([label, url]) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-4 py-2 text-xs font-medium capitalize text-slate-700 transition-colors hover:border-slate-900"
                    >
                      {label}
                      <ExternalLink aria-hidden="true" size={13} strokeWidth={1.8} />
                    </a>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
