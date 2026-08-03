import { motion } from 'framer-motion'
import { ArrowUpRight, FolderGit2, Github } from 'lucide-react'
import { projectsData } from '../data/projects'

const Projects = () => (
  <section id="projects" aria-labelledby="projects-title" className="scroll-mt-28 border-t-2 border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center sm:mb-16"
      >
        <div className="mx-auto mb-5 grid size-11 place-items-center rounded-full border-2 border-slate-900 bg-white">
          <FolderGit2 aria-hidden="true" size={20} strokeWidth={1.8} />
        </div>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">Selected work</p>
        <h2 id="projects-title" className="text-3xl font-semibold uppercase tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
          Projects
        </h2>
      </motion.header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="group flex min-h-80 flex-col rounded-[1.5rem] border-2 border-slate-900 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#dbeafe] sm:p-6"
          >
            <div className="mb-7 flex items-start justify-between gap-4">
              <span className="grid size-10 place-items-center rounded-full border-2 border-slate-900 bg-white transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                <FolderGit2 aria-hidden="true" size={18} strokeWidth={1.8} />
              </span>
              <span className="text-xs text-slate-400">/{String(index + 1).padStart(2, '0')}</span>
            </div>

            <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-600">{project.category}</span>
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950 sm:text-xl">{project.title}</h3>
            <p className="mt-3 line-clamp-4 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1 text-[9px] font-medium text-slate-600">
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-2 border-t border-slate-200 pt-5">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-slate-950"
                >
                  <Github aria-hidden="true" size={14} strokeWidth={1.8} />
                  Source
                </a>
              )}
              {(project.links.demo || project.links.youtube) && (
                <a
                  href={project.links.demo || project.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-slate-950"
                >
                  Visit
                  <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
