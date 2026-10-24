import React from 'react'
import { ScrollReveal } from '../../../../animations/ScrollReveal'
import { PortfolioCopy } from '../../content'
import { EducationGrid, EducationItem, Eyebrow, Section, SectionHead, SectionTitle } from '../../styles'

export const Education: React.FC<{ content: PortfolioCopy['education'] }> = ({ content }) => (
  <Section id="formacao" aria-labelledby="education-title">
    <SectionHead><Eyebrow>{content.eyebrow}</Eyebrow><SectionTitle id="education-title">{content.title}</SectionTitle></SectionHead>
    <EducationGrid>
      {content.entries.map(entry => (
        <ScrollReveal key={entry.institution}>
          <EducationItem><div><h3>{entry.institution}</h3><p>{entry.degree}</p></div><span className="period">{entry.period}</span></EducationItem>
        </ScrollReveal>
      ))}
    </EducationGrid>
    <div style={{ marginTop: 30 }}><Eyebrow>{content.languageTitle}</Eyebrow><p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>{content.languages.join(' · ')}</p></div>
  </Section>
)
