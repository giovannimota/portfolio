import Image from 'next/image'
import React from 'react'
import { ScrollReveal } from '../../../../animations/ScrollReveal'
import { PortfolioCopy, PORTFOLIO_LINKS } from '../../content'
import { Body, Eyebrow, ProjectCard, ProjectGrid, ProjectInfo, Section, SectionHead, SectionTitle, Tags, UnderlineLink, Visual } from '../../styles'

export const Projects: React.FC<{ content: PortfolioCopy['projects'] }> = ({ content }) => (
  <Section id="projetos" aria-labelledby="projects-title">
    <SectionHead><Eyebrow>{content.eyebrow}</Eyebrow><SectionTitle id="projects-title">{content.title}</SectionTitle></SectionHead>
    <ProjectGrid>
      <ScrollReveal>
        <ProjectCard>
          <a href={PORTFOLIO_LINKS.treevo} target="_blank" rel="noreferrer" aria-label={`${content.treevo.linkLabel} — Treevo`}>
            <Visual $variant="treevo">
              <Image src="/images/projects/treevo-light-logo.png" alt={content.treevo.visualAlt} fill sizes="(max-width:760px) 90vw, 55vw" />
              <span className="index">01 — TREEVO</span><span className="word">{content.visualWords[0]}</span>
            </Visual>
          </a>
          <ProjectInfo><h3>{content.treevo.name}</h3><span className="category">{content.treevo.category}</span></ProjectInfo>
          <Body>{content.treevo.description}</Body>
          <Tags>{content.treevo.technologies.map(technology => <span key={technology}>{technology}</span>)}</Tags>
          <UnderlineLink href={PORTFOLIO_LINKS.treevo} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 18 }}>{content.visit} ↗</UnderlineLink>
        </ProjectCard>
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <ProjectCard $secondary>
          <Visual $variant="vizenda" role="img" aria-label={content.vizenda.visualAlt}>
            <span className="orb" aria-hidden="true"/><span className="cross" aria-hidden="true"/>
            <span className="index">02 — VIZENDA</span><span className="word">{content.visualWords[1]}</span>
          </Visual>
          <ProjectInfo><h3>{content.vizenda.name}</h3><span className="category">{content.vizenda.category}</span></ProjectInfo>
          <Body>{content.vizenda.description}</Body>
          <Tags>{content.vizenda.technologies.map(technology => <span key={technology}>{technology}</span>)}</Tags>
          {PORTFOLIO_LINKS.vizenda ? <UnderlineLink href={PORTFOLIO_LINKS.vizenda} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 18 }}>{content.visit} ↗</UnderlineLink> : null}
        </ProjectCard>
      </ScrollReveal>
    </ProjectGrid>
  </Section>
)
