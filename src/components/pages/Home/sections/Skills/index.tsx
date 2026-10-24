import React from 'react'
import { ScrollReveal } from '../../../../animations/ScrollReveal'
import { PortfolioCopy } from '../../content'
import { Eyebrow, Section, SectionHead, SectionTitle, Skill, SkillGrid } from '../../styles'

// Keep adjacent skill blocks from starting their reveal at exactly the same time.
// eslint-disable-next-line no-magic-numbers
const SKILL_STAGGER_MS = 90

export const Skills: React.FC<{ content: PortfolioCopy['skills'] }> = ({ content }) => (
  <Section id="competencias" aria-labelledby="skills-title">
    <SectionHead><Eyebrow>{content.eyebrow}</Eyebrow><SectionTitle id="skills-title">{content.title}</SectionTitle></SectionHead>
    <SkillGrid>
      {content.groups.map((group, index) => (
        <ScrollReveal key={group.name} delay={index * SKILL_STAGGER_MS}>
          <Skill><h3>{group.name}</h3><p>{group.items}</p></Skill>
        </ScrollReveal>
      ))}
    </SkillGrid>
  </Section>
)
