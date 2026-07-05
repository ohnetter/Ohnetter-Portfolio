import blossom1 from '../assets/blossom-1.png'
import petal1 from '../assets/petal-1.png'
import petal2 from '../assets/petal-2.png'
import petal3 from '../assets/petal-3.png'

const Certificates = () => {
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
      credential: "Certificate, Feb-Mar 2023"
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
    <section id='certificates' className="scroll-mt-24 py-20 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="800" className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={blossom1} alt="" aria-hidden="true" className="w-20 h-20 object-contain select-none opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)] [image-rendering:pixelated]" />
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent-dark)] font-mono">
              Certifications
            </h2>
            <img src={blossom1} alt="" aria-hidden="true" className="w-20 h-20 object-contain select-none opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)] [image-rendering:pixelated] scale-x-[-1]" />
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
               hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-2
               shadow-[3px_3px_0_0_rgba(0,0,0,0.08)] hover:shadow-[5px_5px_0_0_var(--accent)]"
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
                    <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-1">{cert.title}</h3>
                    <p className="text-stone-500 dark:text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-stone-400 dark:text-gray-500 text-xs mt-1">{cert.credential}</p>
                  </div>
                  <span style={{ color: index % 2 === 1 ? 'var(--pink)' : 'var(--accent)' }} className="text-2xl font-bold">{cert.date}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-[var(--pink)]/20 text-[var(--pink-deep)]
                     border border-[var(--pink)]/40">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img src={petal1} alt="" aria-hidden="true"
        className="absolute top-6 right-6 w-14 object-contain -rotate-[20deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute bottom-6 left-4 w-12 object-contain rotate-[45deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute top-1/3 left-6 w-10 object-contain rotate-[15deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute top-2/3 right-8 w-12 object-contain -rotate-[35deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute bottom-16 right-4 w-10 object-contain rotate-[70deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute top-3/4 left-10 w-10 object-contain -rotate-[60deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute top-1/2 right-12 w-8 object-contain rotate-[40deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute bottom-32 right-16 w-12 object-contain -rotate-[15deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
    </section>
  )
}

export default Certificates
