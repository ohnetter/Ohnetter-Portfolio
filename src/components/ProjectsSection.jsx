import { useState } from 'react'
import { X, ExternalLink } from 'lucide-react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'

const ProjectsSection = () => {
  const [selected, setSelected] = useState(null)

  const projects = [
    { id: 1, title: "WanderSpot", tech: ["React", "Google Maps API", "UX"],
      image: proj1, desc: "A random travel discovery platform — drops you somewhere new on Street View, with ambient music and region-based navigation." },
    { id: 2, title: "nette.well Toolkit", tech: ["JavaScript", "Custom Tools", "Business Logic"],
       image: proj2, desc: "A pricing builder plus a link and naming generator for offers, built as a personal tool suite for a fictional DTC supplement brand." },
    { id: 4, title: "nette.well Shopify Store", tech: ["Shopify", "Liquid", "CRO"], 
      image: proj4, desc: "A Shopify supplement store build — theme development and CRO applied to a demo storefront." },
    { id: 5, title: "Duckfeet Footwear", tech: ["Landing Pages", "Responsive", "Marketing UX"], 
      image: proj5, desc: "Product and PDP pages for a handcrafted footwear brand, built through a freelance contract with Rust & Salt LLC." }
  ]

  return (
    <section id='projects' className="scroll-mt-24 py-20 px-6 font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="800" className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-5xl font-bold text-[var(--accent-dark)]">Projects</h2>
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
              onClick={() => setSelected(project)}>
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
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.slice(0, 2).map((t, i) => (
                    <span key={i} style={{
                        backgroundColor: index % 2 === 1 ? 'color-mix(in srgb, var(--pink) 20%, transparent)' : 'color-mix(in srgb, var(--accent) 20%, transparent)',
                        borderColor: index % 2 === 1 ? 'color-mix(in srgb, var(--pink) 40%, transparent)' : 'color-mix(in srgb, var(--accent) 40%, transparent)',
                        color: index % 2 === 1 ? 'var(--pink)' : 'var(--accent-dark)'
                      }} className="px-2 py-1 text-xs rounded-full border">{t}</span>
                  ))}
                  {project.tech.length > 2 && <span className="px-2 py-1 text-xs text-stone-500 dark:text-gray-400">+{project.tech.length - 2}</span>}
                </div>
                <button className="text-sm text-[var(--accent)] hover:text-[var(--accent-dark)] flex items-center gap-1">View Details
                   <ExternalLink className="w-3 h-3" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/80  z-50 flex items-center justify-center p-4" 
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
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
