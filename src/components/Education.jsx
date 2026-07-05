import { useState } from 'react'
import { Calendar, Award } from 'lucide-react'
import educ from '../assets/educ.png'

const Education = () => {
  const [selected, setSelected] = useState(null)
  
  const education = [
    { id: 1, degree: "Web Developer, NativePath", institution: "Remote", 
      year: "2023 – Present", grade: "Current role", description: "Landing pages, funnels, Shopify product setup, CRO widgets, internal tooling.",
       courses: ["Instapage", "CheckoutChamp", "Shopify"] },
    { id: 2, degree: "Contract Shopify Developer & CRO Specialist", institution: "Rust & Salt LLC (Duckfeet USA)",
       year: "Nov 2025 – Mar 2026", grade: "Contract", description: "Homepage redesign, Bold Metrics sizing integration, heatmap-driven CRO.", 
       courses: ["Liquid", "Microsoft Clarity", "Bold Metrics"] },
    { id: 3, degree: "Title Agent", institution: "Caldwell & Kearns, P.C.",
       year: "Prior to web dev", grade: "Career background", description: "Title work, including notary duties — where the instinct for details that make or break a deal first started.", 
       courses: ["Client Relations", "Contract Review", "Notary"] }
  ]

  return (
    <section id='education' className="scroll-mt-24 py-12 md:py-20 px-4 md:px-6 font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-2 md:gap-12">
        <img 
          data-aos="fade-right" 
          data-aos-duration="1000" 
          src={educ} 
          alt="Cherry blossom branch illustration" 
          className="lg:w-96 w-full max-w-64 sm:max-w-72 md:max-w-80 lg:max-w-96 h-auto rounded-2xl object-contain drop-shadow-[0_0_40px_rgba(240,101,138,0.35)]" 
        />
        
        <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-1/2 w-full">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent-dark)]">Where I've Worked</h2>
          </div>
          <p className="text-stone-600 dark:text-gray-300 mb-6 md:mb-8 text-center lg:text-left">My professional path</p>

          <div className="space-y-3 md:space-y-4">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                data-aos="fade-up" 
                data-aos-delay={index * 150} 
                data-aos-duration="600"
                className="bg-white dark:bg-white/[0.06] rounded-md overflow-hidden border-2 border-stone-300 dark:border-white/10
                 hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1 cursor-pointer
                 shadow-[3px_3px_0_0_rgba(0,0,0,0.08)] hover:shadow-[5px_5px_0_0_var(--accent)]" 
                onClick={() => setSelected(edu)}
              >
                <div className="flex items-center gap-1.5 px-4 py-2 border-b-2"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--surface) 30%, var(--bg))', borderColor: 'color-mix(in srgb, var(--surface) 55%, transparent)' }}>
                  <span className="w-2 h-2 rounded-full bg-[var(--pink)]"></span>
                  <span className="w-2 h-2 rounded-full bg-[var(--lime)]"></span>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                  <span className="ml-2 text-[10px] font-mono text-stone-400 dark:text-gray-500 truncate">{edu.institution.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.job</span>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 dark:text-white mb-1">{edu.degree}</h3>
                  <p className="text-[var(--accent)] text-sm md:text-base mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-xs md:text-sm">
                    <span className="flex items-center gap-1 text-stone-500 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />{edu.year}</span>
                    <span className="flex items-center gap-1 text-[var(--muted)]">
                      <Award className="w-3 h-3" />{edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/80  z-50 flex items-center justify-center p-4"
         onClick={() => setSelected(null)}>
          <div data-aos="zoom-in" data-aos-duration="300" className="bg-white dark:bg-gray-800/95 rounded-md max-w-[90%] md:max-w-2xl
           w-full p-4 md:p-6 border border-[var(--accent)]/30 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="float-right text-stone-500 dark:text-gray-400
             hover:text-stone-900 dark:text-white text-2xl">✕</button>
            <div className="clear-both">
              <h3 className="text-xl md:text-2xl font-bold text-stone-900 dark:text-white mb-2">{selected.degree}</h3>
              <p className="text-[var(--accent)] text-sm md:text-base mb-4">{selected.institution} • {selected.year}</p>
              <p className="text-stone-600 dark:text-gray-300 text-sm md:text-base mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-2">
                {selected.courses.map((course, i) => (
                  <span key={i} className="px-2 md:px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent-dark)] rounded-full 
                  text-xs md:text-sm">{course}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )}
export default Education
