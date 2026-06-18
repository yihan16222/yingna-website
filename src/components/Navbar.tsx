import { useState, useEffect } from 'react'
import { NAV_ITEMS, COMPANY } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex min-h-11 shrink-0 items-center cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            aria-label={`${COMPANY.name} 首页`}
          >
            <span className="flex h-10 w-[116px] sm:w-[140px] items-center overflow-hidden rounded-md border border-white/70 bg-white px-2 shadow-sm">
              <img
                src="/logo-yingna.png"
                alt={`${COMPANY.name} ${COMPANY.nameEn}`}
                className="block h-auto w-full"
              />
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  scrolled
                    ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden lg:flex btn-primary text-sm py-2 px-4"
          >
            联系合作
          </button>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
              scrolled || menuOpen ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 w-full transition-all duration-300 ${scrolled || menuOpen ? 'bg-gray-700' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full transition-all duration-300 ${scrolled || menuOpen ? 'bg-gray-700' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full transition-all duration-300 ${scrolled || menuOpen ? 'bg-gray-700' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-y-auto transition-all duration-300 ${
          menuOpen ? 'max-h-[calc(100vh-4rem)]' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="px-4 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="min-h-11 text-left px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-2 btn-primary justify-center"
          >
            联系合作
          </button>
        </nav>
      </div>
    </header>
  )
}
