import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { ScrollRevealProvider } from '../../animations/ScrollReveal'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Intro } from './sections/Intro'
import { Personal } from './sections/Personal'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { PortfolioHeader } from './Header'
import { Locale, PORTFOLIO_CONTENT, PORTFOLIO_LINKS } from './content'
import { GlobalStyle, Page } from './styles'

export const Home: React.FC = () => {
  const [locale, setLocale] = useState<Locale>('pt-BR')
  const content = PORTFOLIO_CONTENT[locale]

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('portfolio-locale')
      if (saved === 'en' || saved === 'pt-BR') setLocale(saved)
    } catch {
      // The site remains usable when browser storage is unavailable.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale)
    try {
      window.localStorage.setItem('portfolio-locale', nextLocale)
    } catch {
      // Language switching still works for the current visit.
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Giovanni Mota',
    jobTitle: locale === 'pt-BR' ? 'Desenvolvedor de Software' : 'Software Developer',
    email: PORTFOLIO_LINKS.emailAddress,
    image: 'https://giovanni-mota-portfolio.vercel.app/images/giovanni-mota-profile.jpg',
    url: 'https://giovanni-mota-portfolio.vercel.app/',
    sameAs: [PORTFOLIO_LINKS.linkedin, PORTFOLIO_LINKS.github]
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://giovanni-mota-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Giovanni Mota" />
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.description} />
        <meta property="og:url" content="https://giovanni-mota-portfolio.vercel.app/" />
        <meta property="og:image" content="https://giovanni-mota-portfolio.vercel.app/images/giovanni-mota-profile.jpg" />
        <meta property="og:locale" content={locale === 'pt-BR' ? 'pt_BR' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.title} />
        <meta name="twitter:description" content={content.meta.description} />
        <meta name="twitter:image" content="https://giovanni-mota-portfolio.vercel.app/images/giovanni-mota-profile.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <a className="skip-link" href="#conteudo">{locale === 'pt-BR' ? 'Pular para o conteúdo' : 'Skip to content'}</a>
      <ScrollRevealProvider>
        <Page id="conteudo" tabIndex={-1}>
          <PortfolioHeader content={content} locale={locale} onLocaleChange={changeLocale} />
          <Intro content={content.hero} />
          <Projects content={content.projects} />
          <Experience content={content.experience} />
          <Skills content={content.skills} />
          <Personal content={content.personal} />
          <Education content={content.education} />
          <Contact content={content.contact} locale={locale} />
        </Page>
      </ScrollRevealProvider>
    </>
  )
}
