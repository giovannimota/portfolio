import React from 'react'
import { ScrollReveal } from '../../../../animations/ScrollReveal'
import { PortfolioCopy } from '../../content'
import { Body, Eyebrow, Role, Section, SectionHead, SectionTitle, Tags, Timeline } from '../../styles'

// Delay keeps timeline entries slightly offset without changing document flow.
// eslint-disable-next-line no-magic-numbers
const TIMELINE_STAGGER_MS = 100

export const Experience: React.FC<{ content: PortfolioCopy['experience'] }> = ({ content }) => (
  <Section id="experiencia" aria-labelledby="experience-title">
    <SectionHead><Eyebrow>{content.eyebrow}</Eyebrow><SectionTitle id="experience-title">{content.title}</SectionTitle></SectionHead>
    <Timeline>
      {content.entries.map((entry, index) => (
        <ScrollReveal key={entry.company} delay={index * TIMELINE_STAGGER_MS}>
          <Role>
            <div className="meta"><span className="company">{entry.company}</span><span className="role">{entry.role}</span><span className="period">{entry.period}</span></div>
            <Body>{entry.description}</Body>
            <Tags>{entry.technologies.map(technology => <span key={technology}>{technology}</span>)}</Tags>
          </Role>
        </ScrollReveal>
      ))}
    </Timeline>
  </Section>
)
