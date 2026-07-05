import skillsImg from '../assets/skillsImg.png'
import blossom1 from '../assets/blossom-1.png'
import petal1 from '../assets/petal-1.png'
import petal2 from '../assets/petal-2.png'
import petal3 from '../assets/petal-3.png'

const Skills = () => {
  const categories = [
    { label: 'Platforms', items: ['Shopify', 'Instapage', 'CheckoutChamp', 'Recharge', 'Klaviyo', 'Builder.io', 'Attentive'] },
    { label: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'Shopify Liquid'] },
    { label: 'Tools', items: ['Figma', 'GA4', 'GTM', 'Facebook Pixel', 'Avalara', 'Git', 'AI Tools'] },
    { label: 'Specialties', items: ['Landing Pages', 'Funnels', 'CRO', 'A/B Testing', 'Subscription Flows', 'Product Launch Implementation'] },
  ]

  return (
    <section id='skills' className="scroll-mt-24 py-12 md:py-20 px-4 md:px-6 overflow-hidden font-mono relative">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="800" className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={blossom1} alt="" aria-hidden="true" className="w-20 h-20 object-contain select-none opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)] [image-rendering:pixelated]" />
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent-dark)]">
              My Skills
            </h2>
            <img src={blossom1} alt="" aria-hidden="true" className="w-20 h-20 object-contain select-none opacity-60 drop-shadow-[0_0_8px_rgba(240,101,138,0.5)] [image-rendering:pixelated] scale-x-[-1]" />
          </div>
          <p className="text-stone-600 dark:text-gray-300 text-sm md:text-base">Platforms and tools I've worked with</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-12">
          <div data-aos="fade-right" data-aos-duration="800" className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {categories.map((cat, catIndex) => (
              <div
                key={catIndex}
                data-aos="fade-up"
                data-aos-delay={catIndex * 100}
                data-aos-duration="600"
                className="border-2 rounded-md overflow-hidden bg-white dark:bg-white/[0.06]
                shadow-[3px_3px_0_0_rgba(0,0,0,0.08)] hover:shadow-[5px_5px_0_0_var(--accent)] hover:-translate-y-1 transition-all duration-200"
                style={{ borderColor: catIndex % 2 === 1 ? 'var(--pink)' : 'var(--accent)' }}
              >
                <div
                  className="flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-widest text-white"
                  style={{ backgroundColor: catIndex % 2 === 1 ? 'var(--pink-deep)' : 'var(--accent-deep)' }}
                >
                  <span className="w-2 h-2 rounded-full bg-white/40"></span>
                  <span className="w-2 h-2 rounded-full bg-white/40"></span>
                  <span className="w-2 h-2 rounded-full bg-white/40"></span>
                  <span className="ml-1">{cat.label}</span>
                </div>
                <ul className="px-4 py-3 space-y-1.5">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-sm md:text-base text-stone-900 dark:text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" className="lg:w-1/3 w-full flex justify-center">
            <img 
              src={skillsImg} 
              alt="Cherry blossom branch illustration" 
              className="w-full max-w-56 sm:max-w-64 md:max-w-72 lg:max-w-80 object-contain
               drop-shadow-[0_0_20px_rgba(240,101,138,0.35)]" 
            />
          </div>
        </div>
      </div>

      <img src={petal3} alt="" aria-hidden="true"
        className="absolute top-8 left-4 w-14 object-contain rotate-[15deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute bottom-6 right-6 w-12 object-contain -rotate-[30deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute top-2/3 right-4 w-10 object-contain rotate-[50deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute top-1/3 right-8 w-12 object-contain rotate-[65deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute top-1/2 left-8 w-10 object-contain -rotate-[50deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal2} alt="" aria-hidden="true"
        className="absolute top-1/4 left-12 w-10 object-contain rotate-[30deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
      <img src={petal1} alt="" aria-hidden="true"
        className="absolute bottom-20 right-10 w-8 object-contain -rotate-[45deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden lg:block" />
      <img src={petal3} alt="" aria-hidden="true"
        className="absolute top-3/4 right-12 w-12 object-contain rotate-[20deg]
        pointer-events-none select-none [image-rendering:pixelated] hidden sm:block" />
    </section>
  )
}

export default Skills
