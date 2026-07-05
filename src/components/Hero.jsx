import hero from '../assets/hero.png'
import CV from '../assets/CV.pdf'
import { DownloadIcon } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import TechStackBar from './TechStackBar'

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const words = ["I build landing pages", "I build funnels", "I launch products"]
  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseTime = 2000  

  useEffect(() => { 
    const currentWord = words[index] 
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1))
        
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setText(currentWord.substring(0, text.length - 1))
        
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)
    
    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, words])

  const socialIcons = [
    { icon: FaLinkedin, alt: 'LinkedIn', iconColor: '#0077B5', href: 'https://linkedin.com/in/annettesheriff' },
    { icon: FaGithub, alt: 'GitHub', iconColor: '#1A1A1A', href: 'https://github.com/ohnetter' },
  ]

  return (
    <div className="relative overflow-hidden flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delat="250"
        className="body-font mt-6 "
      >
        <div className="max-w-6xl mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14
         flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 lg:mt-14 mt-14 overflow-hidden">
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <h1
                className="title-font text-3xl sm:text-4xl lg:text-5xl mb-2 font-bold text-stone-900 dark:text-white font-mono"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Hi, I'm Annette
              </h1>
            </div>
            
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-semibold text-transparent bg-clip-text
               bg-linear-to-r from-[var(--accent)] to-[var(--lime)] font-mono"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              {text}
              <span className="animate-pulse text-[var(--accent)]">|</span>
            </h2>

            <p
              className="mb-8 sm:mb-10 leading-relaxed max-w-md sm:max-w-lg text-stone-600 dark:text-gray-300 font-mono"
              data-aos="fade-up"
              data-aos-dela="600"
            >
              Web Developer & CRO Specialist focused on direct-response ecommerce.
              1,000+ landing pages shipped and 400+ funnels launched, end to end.
            </p>

            <div className="w-full pt-2 sm:pt-4">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={CV} download className="w-auto">
                  <button
                    className="w-auto inline-flex items-center justify-center text-white 
                    bg-linear-to-r from-[var(--pink-deep)] to-[var(--pink-deep2)] border-2 border-[var(--ink)] py-3 px-6 sm:px-8 
                    shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[6px_6px_0_0_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5
                    active:shadow-none active:translate-x-0 active:translate-y-0
                    rounded-full text-base sm:text-lg font-semibold
                     transition-all duration-150 font-mono"
                  >
                    <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                    Download CV
                  </button>
                </a>

                <div className="flex gap-3 sm:gap-4">
                  {socialIcons.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                      >
                        <div
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shadow-md flex items-center justify-center hover:shadow-lg
                           transition-shadow bg-white"
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: social.iconColor }} />
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full lg:w-auto flex justify-center flex-shrink-0"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-64 sm:w-80 lg:w-96">
              <img
                src={hero}
                alt="Annette Sheriff — pixel art portrait"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500
                drop-shadow-[0_0_45px_rgba(240,101,138,0.45)]"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 bg-[var(--accent)]
           rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000 hidden sm:block"
        />
      </section>
      <TechStackBar />
    </div>
  )
}

export default Hero