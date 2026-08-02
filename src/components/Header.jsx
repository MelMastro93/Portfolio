import { useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About me' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">Melissa</a>

        <button
          className="header__toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Apri menu"
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
        </nav>
      </div>
    </header>
  )
}

export default Header
