import { useState } from 'react'
import { X, Eye } from 'lucide-react'

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  
  const certificates = [
    {
      id: 5,
      title: "CRO Overview and Best Practices",
      issuer: "Shopify",
      date: "2026",
      skills: ["CRO", "Shopify"],
      credential: "Course completion badge"
    },
    {
      id: 7,
      title: "Google Developer Program",
      issuer: "Google for Developers",
      date: "2026",
      skills: ["Accessibility", "Web Development"],
      credential: "Learning & accessibility badges"
    },
    {
      id: 6,
      title: "Shopify Expert (Zero to Hero)",
      issuer: "Udemy",
      date: "2024",
      skills: ["Shopify"],
      credential: "Instructor: Tim Sharp"
    },
    {
      id: 1,
      title: "Manual Quality Assurance",
      issuer: "Alli Foundation",
      date: "2023",
      skills: ["QA Testing", "Manual Testing"],
      credential: "Certificate, Feb–Mar 2023"
    },
    {
      id: 2,
      title: "Junior Web Developer Program",
      issuer: "Generation USA",
      date: "2023",
      skills: ["JavaScript", "HTML/CSS", "Git"],
      credential: "350+ hours of instruction, incl. W3Schools JavaScript Certification"
    },
    {
      id: 4,
      title: "Associate's Degree",
      issuer: "Bradley Academy for the Visual Arts",
      date: "2000",
      skills: ["Specialized Technology", "Interior Design"],
      credential: "York, PA"
    }
  ]

  return (
    <section id='certificates' className="scroll-mt-24 py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="800" className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-5xl font-bold text-[var(--accent-dark)] font-mono">
              Certifications
            </h2>
          </div>
          <p className="text-stone-600 dark:text-gray-300 mt-4 font-mono">Professional achievements & background</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="800"
              className="bg-white dark:bg-white/[0.06] rounded-md overflow-hidden border-2 border-stone-300 dark:border-white/10
               hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-2 cursor-pointer
               shadow-[3px_3px_0_0_rgba(0,0,0,0.08)] hover:shadow-[5px_5px_0_0_var(--accent)]"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b-2"
                style={{ backgroundColor: 'color-mix(in srgb, var(--surface) 30%, var(--bg))', borderColor: 'color-mix(in srgb, var(--surface) 55%, transparent)' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--pink)]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--lime)]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]"></span>
                <span className="ml-2 text-[10px] font-mono text-stone-500 dark:text-gray-400 truncate">{cert.issuer.toLowerCase().replace(/\s+/g, '-')}.cert</span>
              </div>
              <div className="p-6 font-mono">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">{cert.title}</h3>
                    <p className="text-stone-500 dark:text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                  <span style={{ color: index % 2 === 1 ? 'var(--pink)' : 'var(--accent)' }} className="text-2xl font-bold">{cert.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-[var(--pink)]/20 text-[var(--pink-deep)]
                     border border-[var(--pink)]/40">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="text-sm text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors flex 
                items-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className="fixed inset-0 bg-black/80  z-50 flex items-center justify-center p-4" 
          onClick={() => setSelectedCert(null)}>
            <div data-aos="zoom-in" data-aos-duration="300" className="bg-white dark:bg-gray-800/95 rounded-md max-w-2xl 
            w-full p-6 border border-[var(--accent)]/30" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedCert(null)} className="float-right text-stone-500 dark:text-gray-400 hover:text-stone-900 dark:text-white">
                <X className="w-6 h-6" />
              </button>
              <div className="clear-both">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-white">{selectedCert.title}</h3>
                </div>
                <p className="text-[var(--accent)] mb-4">{selectedCert.issuer} • {selectedCert.date}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCert.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[var(--pink)]/20 text-[var(--pink-deep)] rounded-full text-sm">
                      {skill}</span>
                  ))}
                </div>
                <p className="text-stone-600 dark:text-gray-300 mb-4">{selectedCert.credential}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificates
