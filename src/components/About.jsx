import aboutImg from '../assets/aboutImg.png'
import blossom1 from '../assets/blossom-1.png'
import petal1 from '../assets/petal-1.png'
import petal2 from '../assets/petal-2.png'
import petal3 from '../assets/petal-3.png'

const About = () => {
  const stats = [
    { number: '1,000+', label: 'Pages Built' },
    { number: '400+', label: 'Funnels Launched' },
  ]

  return (
    <section id='about' className="scroll-mt-24 flex items-center justify-center p-4 sm:p-6 lg:p-12 py-14 lg:py-20 relative overflow-hidden select-none">

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 relative z-10">

        <div data-aos="fade-right" data-aos-duration="800" className="w-full lg:w-[58%] flex flex-col items-center lg:items-start
        text-center lg:text-left order-2 lg:order-1">
          <p className="text-sm lg:text-lg mb-2 font-bold text-[var(--accent-dark)] font-mono tracking-widest uppercase">
            Get To Know Me
          </p>

          <div className="flex items-center gap-1 mb-4 flex-wrap">
            <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0 overflow-hidden flex items-center justify-center opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)]">
              <img src={blossom1} alt="" aria-hidden="true" className="w-full h-full object-contain scale-150 select-none [image-rendering:pixelated]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-stone-900 dark:text-white font-mono">
              About <span className='text-[var(--accent)]'>Me</span>
            </h2>
            <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0 overflow-hidden flex items-center justify-center opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)] scale-x-[-1]">
              <img src={blossom1} alt="" aria-hidden="true" className="w-full h-full object-contain scale-150 select-none [image-rendering:pixelated]" />
            </div>
          </div>

          <p className="text-stone-600 dark:text-gray-300 leading-relaxed mb-4 max-w-[65ch] font-mono text-sm sm:text-base">
            I build things for the internet, mostly in the world of eCommerce, landing
            pages, and conversion optimization. Over the past few years, I've created more
            than 1,000 landing pages and 400+ funnels, but honestly, I just enjoy solving
            problems and making things work better.
          </p>
          <p className="text-stone-600 dark:text-gray-300 leading-relaxed mb-4 max-w-[65ch] font-mono text-sm sm:text-base">
            My background is a mix of development, design, marketing, and a lot of figuring
            things out as I go. I've worked on everything from Shopify stores and subscription
            flows to custom tools, analytics, and direct-response campaigns.
          </p>
          <p className="text-stone-600 dark:text-gray-300 leading-relaxed mb-6 max-w-[65ch] font-mono text-sm sm:text-base">
            When I'm not working, I'm probably browsing antique stores, playing games,
            watching horror movies, or hanging out with my cats, Bruce and Azula. I also
            have a soft spot for rainy days, retro tech, and cute pixel art.
          </p>

          <div className="grid grid-cols-2 gap-8 w-full max-w-sm lg:max-w-none pt-5 border-t border-stone-300 dark:border-white/10">
            {stats.map((stat, index) => (
              <div data-aos="fade-up" data-aos-delay={index * 100} key={index} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--accent)]">{stat.number}</div>
                <div className="text-xs sm:text-sm text-stone-500 dark:text-gray-400 font-mono mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000" className="w-full lg:w-[32%] flex justify-center order-1 lg:order-2">
          <img
            src={aboutImg}
            alt="Pink pixel art kitten illustration"
            className="w-2/5 sm:w-1/3 md:w-1/3 lg:w-full h-auto object-contain
            drop-shadow-[0_0_40px_rgba(240,101,138,0.35)] transform hover:scale-103 transition-transform duration-500"
          />
        </div>

      </div>

      <img src={petal2} alt="" aria-hidden="true"
        className="absolute top-8 right-4 w-14 object-contain rotate-[30deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute bottom-8 left-4 w-12 object-contain -rotate-[15deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute top-1/2 right-6 w-10 object-contain rotate-[60deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute top-1/4 left-6 w-12 object-contain -rotate-[40deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute bottom-16 right-16 w-10 object-contain rotate-[15deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute top-3/4 left-12 w-8 object-contain -rotate-[25deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute top-1/3 right-12 w-12 object-contain rotate-[80deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute bottom-32 left-16 w-10 object-contain rotate-[35deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
    </section>
  )
}

export default About
