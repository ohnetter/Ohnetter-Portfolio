import { Menu, X, Sun, Moon } from "lucide-react"
import { useState } from "react"

const Navbar = ({ dark, setDark }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'HOME', link: '#home' },
    { name: 'ABOUT', link: '#about' },
    { name: 'CERTIFICATES', link: '#certificates' },
    { name: 'SKILLS', link: '#skills' },
    { name: 'PROJECTS', link: '#projects' },
    { name: 'CONTACT', link: '#contact' },
  ]

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase())
    setIsMenuOpen(false) 
  }

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4 px-3 sm:px-6">
      <nav className="flex items-center justify-center w-full max-w-fit bg-[#fdeaec]/90 dark:bg-linear-to-br dark:from-[var(--accent)]/40 dark:via-[var(--pink)]/25 dark:to-[var(--lime)]/40
       backdrop-blur-lg rounded-2xl px-3 sm:px-4 lg:px-8 py-2 border-2 border-[var(--ink)]
       shadow-[4px_4px_0_0_var(--ink)] font-sans">
        <div className="flex items-center justify-between w-full space-x-2 sm:space-x-6 lg:space-x-8">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 min-w-0">
            <span className="text-base sm:text-xl lg:text-2xl font-mono font-extrabold text-[var(--accent-dark)] truncate">
              annette<span style={{ color: 'var(--pink)' }}>.sheriff</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative font-semibold font-mono tracking-wide text-sm"
              >
                <span
                  className={`transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-[var(--accent-dark)]'
                      : 'text-stone-800 hover:text-[var(--accent-dark)]'
                  }`}
                >
                  {item.name}
                </span>

                {activeSection === item.name.toLowerCase() && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r
                   from-[var(--accent-dark)] to-[var(--pink)] rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full bg-white/80 hover:bg-white transition-all border-2 border-[var(--ink)]
              shadow-[2px_2px_0_0_var(--ink)] hover:shadow-[3px_3px_0_0_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              {dark ? <Sun className="w-4 h-4 text-[var(--accent-dark)]" /> : <Moon className="w-4 h-4 text-[var(--accent-dark)]" />}
            </button>
            {/* Hire Me Button */}
            <a
              href="#contact"
              className="hidden lg:block px-6 py-2 font-semibold font-mono tracking-wide text-sm rounded-full bg-linear-to-r
               from-[var(--pink-deep)] to-[var(--pink-deep2)] text-white border-2 border-[var(--ink)]
               shadow-[3px_3px_0_0_var(--ink)] hover:shadow-[4px_4px_0_0_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5
               active:shadow-none active:translate-x-0 active:translate-y-0 transition-all duration-150"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full border-2 border-[var(--ink)] shadow-[2px_2px_0_0_var(--ink)] transition-all"
              style={{ background: 'color-mix(in srgb, var(--accent-dark) 15%, transparent)' }}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 lg:hidden backdrop-blur-lg rounded-2xl shadow-lg border"
            style={{ background: 'var(--bg)', borderColor: 'var(--surface)' }}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className="block"
                >
                  <div
                    className={`py-3 px-4 rounded-2xl text-center ${
                      activeSection === item.name.toLowerCase() ? 'bg-linear-to-r from-[var(--accent)]/15 to-[var(--pink)]/15' : ''
                    }`}
                  >
                    <span
                      className="font-medium font-mono text-sm"
                      style={{ color: activeSection === item.name.toLowerCase() ? 'var(--accent-dark)' : 'var(--ink)' }}
                    >
                      {item.name}
                    </span>
                  </div>
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-center font-semibold font-mono text-sm rounded-full bg-linear-to-r
                 from-[var(--pink-deep)] to-[var(--pink-deep2)] text-white border-2 border-[var(--ink)]
                 shadow-[3px_3px_0_0_var(--ink)] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all duration-150"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar