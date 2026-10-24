import React, { useEffect, useState } from 'react'
import { Locale, PortfolioCopy } from './content'
import { Brand, HeaderActions, HeaderBar, Nav } from './styles'

// Ratios select the section most visibly crossing the navigation focus line.
// eslint-disable-next-line no-magic-numbers
const SECTION_OBSERVER_THRESHOLDS = [0, 0.15, 0.35, 0.6]

interface HeaderProps {
  content: PortfolioCopy
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export const PortfolioHeader: React.FC<HeaderProps> = ({ content, locale, onLocaleChange }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('sobre')

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = content.nav
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-18% 0px -68% 0px', threshold: SECTION_OBSERVER_THRESHOLDS })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [content.nav])

  return (
    <HeaderBar>
      <Brand href="#sobre" onClick={() => setMenuOpen(false)}>Giovanni Mota<span>.</span></Brand>
      <Nav id="main-navigation" $open={menuOpen} aria-label={locale === 'pt-BR' ? 'Navegação principal' : 'Main navigation'}>
        {content.nav.map(({ id, label }) => (
          <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </Nav>
      <HeaderActions>
        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? content.closeMenu : content.menu} onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? (locale === 'pt-BR' ? 'FECHAR' : 'CLOSE') : content.menu.toUpperCase()}
        </button>
        <button type="button" className={locale === 'pt-BR' ? 'active' : ''} aria-label="Português brasileiro" aria-pressed={locale === 'pt-BR'} onClick={() => onLocaleChange('pt-BR')}>PT</button>
        <span aria-hidden="true">/</span>
        <button type="button" className={locale === 'en' ? 'active' : ''} aria-label="English" aria-pressed={locale === 'en'} onClick={() => onLocaleChange('en')}>EN</button>
      </HeaderActions>
    </HeaderBar>
  )
}
