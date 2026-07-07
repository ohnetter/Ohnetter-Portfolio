import { useState } from 'react'
import { X, ExternalLink, Lock } from 'lucide-react'
import { SiFigma } from 'react-icons/si'
import blossom1 from '../assets/blossom-1.png'
import petal1 from '../assets/petal-1.png'
import petal2 from '../assets/petal-2.png'
import petal3 from '../assets/petal-3.png'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'

const ProjectsSection = () => {
  const [selected, setSelected] = useState(null)

  const projects = [
    {
      id: 1,
      title: "WanderSpot",
      tech: ["React", "Google Maps API", "UX"],
      image: proj1,
      desc: "A random travel discovery platform — drops you somewhere new on Street View, with ambient music and region-based navigation.",
      liveUrl: "https://thewanderspot.com"
    },
    {
      id: 2,
      title: "nette.well Toolkit",
      tech: ["JavaScript", "Custom Tools", "Business Logic"],
      image: proj2,
      desc: "A pricing builder plus a link and naming generator for offers, built as a personal tool suite for a fictional DTC supplement brand.",
      liveUrl: "https://nettewell-tools.netlify.app/"
    },
    {
      id: 4,
      title: "nette.well Shopify Store",
      tech: ["Shopify", "Liquid", "CRO"],
      image: proj4,
      desc: "A Shopify supplement store build — theme development and CRO applied to a demo storefront.",
      liveUrl: null,
      note: "Password protected - ask for access"
    },
    {
      id: 5,
      title: "Duckfeet Footwear",
      tech: ["Landing Pages", "Responsive", "Marketing UX"],
      image: proj5,
      desc: "Product and PDP pages for a handcrafted footwear brand, built through a freelance contract with Rust & Salt LLC.",
      liveUrl: null,
      figmaUrl: "https://www.figma.com/design/ybDWIDR0jY5qckrVB8aVZj/Annette-Sheriff-%E2%80%94-Work-Samples?node-id=8-2&t=MC89i55EdG6RTHq6-1"
    }
  ]

  return (
    <section id='projects' className="scroll-mt-24 py-20 px-6 font-mono overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="800" className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4 flex-wrap">
            <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0 overflow-hidden flex items-center justify-center opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)]">
              <img src={blossom1} alt="" aria-hidden="true" className="w-full h-full object-contain scale-150 select-none [image-rendering:pixelated]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--accent-dark)]">Projects</h2>
            <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0 overflow-hidden flex items-center justify-center opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)] scale-x-[-1]">
              <img src={blossom1} alt="" aria-hidden="true" className="w-full h-full object-contain scale-150 select-none [image-rendering:pixelated]" />
            </div>
          </div>
          <p className="text-stone-600 dark:text-gray-300">Stuff I've shipped</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
              className="group bg-white dark:bg-white/[0.06] rounded-md overflow-hidden
              border-2 border-stone-300 dark:border-white/10 hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-2 cursor-pointer
              shadow-[3px_3px_0_0_rgba(0,0,0,0.08)] hover:shadow-[5px_5px_0_0_var(--accent)]"
              onClick={() => setSelected(project)}
            >
              <div className="flex items-center gap-1.5 px-4 py-2 border-b-2"
                style={{ backgroundColor: 'color-mix(in srgb, var(--surface) 30%, var(--bg))', borderColor: 'color-mix(in srgb, var(--surface) 55%, transparent)' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--pink)]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--lime)]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]"></span>
                <span className="ml-2 text-[10px] font-mono text-stone-500 dark:text-gray-400 truncate">{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
              </div>
              <div className="overflow-hidden aspect-video relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-110
                transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 2).map((t, i) => (
                    <span key={i} style={{
                        backgroundColor: index % 2 === 1 ? 'color-mix(in srgb, var(--pink) 20%, transparent)' : 'color-mix(in srgb, var(--accent) 20%, transparent)',
                        borderColor: index % 2 === 1 ? 'color-mix(in srgb, var(--pink) 40%, transparent)' : 'color-mix(in srgb, var(--accent) 40%, transparent)',
                        color: index % 2 === 1 ? 'var(--pink)' : 'var(--accent-dark)'
                      }} className="px-2 py-1 text-xs rounded-full border">{t}</span>
                  ))}
                  {project.tech.length > 2 && <span className="px-2 py-1 text-xs text-stone-500 dark:text-gray-400">+{project.tech.length - 2}</span>}
                </div>

                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <button className="text-sm text-[var(--accent)] hover:text-[var(--accent-dark)] flex items-center gap-1 shrink-0">
                    View Details <ExternalLink className="w-3 h-3" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded
                      border-2 border-[var(--accent)] text-[var(--accent-dark)]
                      bg-[var(--accent)]/10 hover:bg-[var(--accent)] hover:text-white
                      transition-all duration-200
                      shadow-[2px_2px_0_0_var(--accent)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                    >
                      Live Site <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded
                      border-2 border-[var(--pink)] text-[var(--pink-deep)]
                      bg-[var(--pink)]/10 hover:bg-[var(--pink)] hover:text-white
                      transition-all duration-200
                      shadow-[2px_2px_0_0_var(--pink)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                    >
                      Design File <SiFigma className="w-3 h-3" />
                    </a>
                  )}

                  {project.note && !project.liveUrl && (
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded
                      border border-stone-300 dark:border-white/15
                      text-stone-400 dark:text-gray-500
                      bg-stone-100 dark:bg-white/[0.04]">
                        <Lock className="w-3 h-3" /> Password Protected
                      </span>
                      <p className="text-[10px] text-stone-400 dark:text-gray-600 text-right leading-tight max-w-[140px]">
                        {project.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img src={petal2} alt="" aria-hidden="true"
        className="absolute top-6 right-4 w-14 object-contain rotate-[35deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute bottom-24 left-4 w-12 object-contain -rotate-[10deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute top-1/2 left-6 w-10 object-contain rotate-[55deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute top-1/4 left-12 w-12 object-contain -rotate-[45deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute bottom-40 right-6 w-10 object-contain rotate-[25deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute top-3/4 right-10 w-8 object-contain -rotate-[20deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute top-1/3 right-14 w-10 object-contain rotate-[60deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute bottom-16 left-16 w-8 object-contain rotate-[35deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />

      {selected && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={() => setSelected(null)}>
          <div data-aos="zoom-in" data-aos-duration="300" className="bg-white dark:bg-gray-800/95 rounded-md max-w-2xl w-full p-6 border
           border-[var(--accent)]/30" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="float-right text-stone-500 dark:text-gray-400 hover:text-stone-900 dark:text-white">
                <X className="w-6 h-6" /></button>
            <div className="clear-both">
              <img src={selected.image} alt={selected.title} className="w-full aspect-video object-cover object-top rounded-md mb-4" />
              <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">{selected.title}</h3>
              <p className="text-stone-600 dark:text-gray-300 mb-4">{selected.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent-dark)] rounded-full text-sm">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {selected.liveUrl && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono rounded
                    border-2 border-[var(--accent)] text-[var(--accent-dark)]
                    bg-[var(--accent)]/10 hover:bg-[var(--accent)] hover:text-white
                    transition-all duration-200
                    shadow-[2px_2px_0_0_var(--accent)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    Live Site <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selected.figmaUrl && (
                  <a
                    href={selected.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono rounded
                    border-2 border-[var(--pink)] text-[var(--pink-deep)]
                    bg-[var(--pink)]/10 hover:bg-[var(--pink)] hover:text-white
                    transition-all duration-200
                    shadow-[2px_2px_0_0_var(--pink)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    Design File <SiFigma className="w-4 h-4" />
                  </a>
                )}
              </div>
              {selected.note && !selected.liveUrl && (
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono rounded
                  border border-stone-300 dark:border-white/15
                  text-stone-400 dark:text-gray-500
                  bg-stone-100 dark:bg-white/[0.04]">
                    <Lock className="w-3.5 h-3.5" /> Password Protected
                  </span>
                  <p className="text-xs text-stone-400 dark:text-gray-500">{selected.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
