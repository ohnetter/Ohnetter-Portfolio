const TechStackBar = () => {
  const techStack = [
    'Shopify / Liquid',
    'Instapage',
    'CheckoutChamp',
    'JavaScript',
    'Figma',
  ]

  return (
    <div className="relative z-10 w-full overflow-hidden bg-white/70 dark:bg-white/[0.06]
     border-y border-stone-200 dark:border-white/10 py-4 md:py-5 mt-10 md:mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-14">
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 sm:gap-x-4">
          {techStack.map((tech, index) => (
            <span key={index} className="flex items-center gap-3 sm:gap-4">
              <span
                style={{ color: 'var(--pink-deep)' }}
                className="text-[11px] sm:text-xs md:text-sm font-mono font-bold tracking-wide whitespace-nowrap"
              >
                {tech}
              </span>
              {index < techStack.length - 1 && (
                <span className="text-stone-300">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStackBar
