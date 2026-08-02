import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#about', label: 'About me' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">Melissa</a>

        <button
          className="header__toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            className="header__theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
