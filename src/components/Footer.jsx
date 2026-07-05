const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-stone-300 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-[var(--accent-dark)] font-mono text-2xl sm:text-3xl font-bold">annette.sheriff</p>
          <p className="text-stone-400 dark:text-gray-500 text-xs font-mono">
            © {new Date().getFullYear()} Annette Sheriff. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  ) 
}

export default Footer
