import Image from 'next/image'
import React from 'react'
import { ScrollReveal } from '../../../../animations/ScrollReveal'
import { PortfolioCopy, PORTFOLIO_LINKS } from '../../content'
import { ButtonRow, Eyebrow, Hero, HeroTitle, ImageCaption, Lead, Muted, Portrait, PortraitWrap, PrimaryLink, UnderlineLink } from '../../styles'

export const Intro: React.FC<{ content: PortfolioCopy['hero'] }> = ({ content }) => (
  <Hero id="sobre" aria-labelledby="hero-title">
    <div>
      <ScrollReveal><Eyebrow>{content.eyebrow}</Eyebrow></ScrollReveal>
      <HeroTitle id="hero-title">{content.title}</HeroTitle>
      <ScrollReveal delay={100}><Lead>{content.intro}</Lead></ScrollReveal>
      <ScrollReveal delay={180}><Muted>{content.note}</Muted></ScrollReveal>
      <ScrollReveal delay={240}>
        <ButtonRow>
          <PrimaryLink href="#projetos">{content.projects}<span className="arrow" aria-hidden="true">↘</span></PrimaryLink>
          <UnderlineLink href={PORTFOLIO_LINKS.email}>{content.contact}</UnderlineLink>
        </ButtonRow>
      </ScrollReveal>
    </div>
    <PortraitWrap className="portrait-wrap">
      <Portrait><Image src="/images/giovanni-mota-profile.jpg" alt={content.portraitAlt} fill priority sizes="(max-width:760px) 80vw, 34vw" /></Portrait>
      <ImageCaption><span>GIOVANNI MOTA</span><span>{content.location}</span></ImageCaption>
    </PortraitWrap>
  </Hero>
)
