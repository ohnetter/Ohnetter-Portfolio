import { Mail, Phone, MapPin, Send } from 'lucide-react'
import blossom1 from '../assets/blossom-1.png'
import petal1 from '../assets/petal-1.png'
import petal2 from '../assets/petal-2.png'
import petal3 from '../assets/petal-3.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import phoneImg from '../assets/phoneImg.png'

const Contact = () => {
  return ( 
    <section id='contact' className="py-16 px-6 overflow-hidden font-mono scroll-m-8 relative">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="800" className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={blossom1} alt="" aria-hidden="true" className="w-20 h-20 object-contain select-none opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)] [image-rendering:pixelated]" />
            <h2 className="text-5xl font-bold text-[var(--accent-dark)]">Let's Talk</h2>
            <img src={blossom1} alt="" aria-hidden="true" className="w-20 h-20 object-contain select-none opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)] [image-rendering:pixelated] scale-x-[-1]" />
          </div>
          <p className="text-stone-600 dark:text-gray-300">Have a project in mind? I'd love to hear about it.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000" className="lg:w-110 lg:h-120 w-full">
            <img src={phoneImg} alt="Retro pink telephone illustration" className="w-full max-w-xs mx-auto drop-shadow-[0_0_30px_rgba(240,101,138,0.35)]" />
          </div>

          <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a href="mailto:ohnetter@gmail.com" className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border-2 border-stone-300 dark:border-white/10
               shadow-[2px_2px_0_0_rgba(0,0,0,0.06)] hover:shadow-[4px_4px_0_0_var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5
               transition-all duration-150 text-stone-600 dark:text-gray-300 hover:text-stone-900 dark:text-white">
                <Mail className="w-5 h-5 text-[var(--accent)] shrink-0" />
                <span className="text-sm">ohnetter@gmail.com</span>
              </a>
              <a href="tel:7176363002" className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border-2 border-stone-300 dark:border-white/10
               shadow-[2px_2px_0_0_rgba(0,0,0,0.06)] hover:shadow-[4px_4px_0_0_var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5
               transition-all duration-150 text-stone-600 dark:text-gray-300 hover:text-stone-900 dark:text-white">
                <Phone className="w-5 h-5 text-[var(--accent)] shrink-0" />
                <span className="text-sm">(717) 636-3002</span>
              </a>
              <a href="https://linkedin.com/in/annettesheriff" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border-2 border-stone-300 dark:border-white/10
               shadow-[2px_2px_0_0_rgba(0,0,0,0.06)] hover:shadow-[4px_4px_0_0_var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5
               transition-all duration-150 text-stone-600 dark:text-gray-300 hover:text-stone-900 dark:text-white">
                <FaLinkedin className="w-5 h-5 text-[var(--accent)] shrink-0" />
                <span className="text-sm">linkedin.com/in/annettesheriff</span>
              </a>
              <a href="https://github.com/ohnetter" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border-2 border-stone-300 dark:border-white/10
               shadow-[2px_2px_0_0_rgba(0,0,0,0.06)] hover:shadow-[4px_4px_0_0_var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5
               transition-all duration-150 text-stone-600 dark:text-gray-300 hover:text-stone-900 dark:text-white">
                <FaGithub className="w-5 h-5 text-[var(--accent)] shrink-0" />
                <span className="text-sm">github.com/ohnetter</span>
              </a>
            </div>

            <div className="flex items-center gap-3 text-stone-500 dark:text-gray-400 text-sm mb-6">
              <MapPin className="w-4 h-4 text-[var(--accent)]" />
              Harrisburg, PA · Available for freelance & contract work
            </div>

            <a href="mailto:ohnetter@gmail.com" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[var(--ink)]
             bg-linear-to-r from-[var(--pink-deep)] to-[var(--pink-deep2)] text-white font-bold
             shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[6px_6px_0_0_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5
             active:shadow-none active:translate-x-0 active:translate-y-0 transition-all duration-150">
              <Send className="w-5 h-5" />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>

      <img src={petal1} alt="" aria-hidden="true"
        className="absolute top-8 right-4 w-14 object-contain -rotate-[25deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute bottom-6 left-4 w-12 object-contain rotate-[50deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute top-1/2 right-8 w-10 object-contain rotate-[20deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute top-1/4 left-8 w-12 object-contain rotate-[40deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute bottom-16 right-12 w-10 object-contain -rotate-[60deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute top-3/4 left-12 w-10 object-contain rotate-[30deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute top-1/3 right-16 w-8 object-contain -rotate-[55deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute bottom-24 right-16 w-12 object-contain rotate-[45deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
    </section>
  )
}

export default Contact
