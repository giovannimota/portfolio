import React from 'react'
import { Locale, PortfolioCopy, PORTFOLIO_LINKS, PORTFOLIO_RESUMES } from '../../content'
import { Body, ContactList, ContactSection, Eyebrow, Footer, SectionTitle } from '../../styles'

export const Contact: React.FC<{ content: PortfolioCopy['contact']; locale: Locale }> = ({ content, locale }) => (
  <ContactSection id="contato" aria-labelledby="contact-title">
    <div className="contact-layout">
      <div><Eyebrow>{content.eyebrow}</Eyebrow><SectionTitle id="contact-title">{content.title}</SectionTitle><Body style={{ marginTop: 24 }}>{content.description}</Body></div>
      <ContactList>
        <a href={PORTFOLIO_LINKS.email}>{content.email} · {PORTFOLIO_LINKS.emailAddress} ↗</a>
        <a href={PORTFOLIO_LINKS.linkedin} target="_blank" rel="noreferrer">{content.linkedin} ↗</a>
        <a href={PORTFOLIO_LINKS.github} target="_blank" rel="noreferrer">{content.github} ↗</a>
        <a href={PORTFOLIO_RESUMES[locale]} target="_blank" rel="noreferrer">{content.resume} ↗</a>
      </ContactList>
    </div>
    <Footer><span>© {new Date().getFullYear()} Giovanni Mota</span><span>{content.footer}</span><a href="#sobre">↑ {content.backToTop}</a></Footer>
  </ContactSection>
)
