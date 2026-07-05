import skillsImg from '../assets/skillsImg.png'

const Skills = () => {
  const categories = [
    { label: 'Platforms', items: ['Shopify', 'Instapage', 'CheckoutChamp', 'Recharge', 'Klaviyo', 'Builder.io', 'Attentive'] },
    { label: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'Shopify Liquid'] },
    { label: 'Tools', items: ['Figma', 'GA4', 'GTM', 'Facebook Pixel', 'Avalara', 'Git', 'AI Tools'] },
    { label: 'Specialties', items: ['Landing Pages', 'Funnels', 'CRO', 'A/B Testing', 'Subscription Flows', 'Product Launch Implementation'] },
  ]

  return (
    <section id='skills' className="scroll-mt-24 py-12 md:py-20 px-4 md:px-6 overflow-hidden font-mono">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="800" className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent-dark)]">
              My Skills
            </h2>
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
    </section>
  )
}

export default Skills
