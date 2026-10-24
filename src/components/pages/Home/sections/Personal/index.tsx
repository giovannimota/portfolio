import React from 'react'
import { ScrollReveal } from '../../../../animations/ScrollReveal'
import { PortfolioCopy } from '../../content'
import { Eyebrow, PersonalIntro, Section, SectionHead, SectionTitle, Story, StoryGrid } from '../../styles'

// A restrained delay creates a reading-order stagger across the three stories.
// eslint-disable-next-line no-magic-numbers
const STORY_STAGGER_MS = 90

export const Personal: React.FC<{ content: PortfolioCopy['personal'] }> = ({ content }) => (
  <Section id="pessoal" aria-labelledby="personal-title">
    <SectionHead><Eyebrow>{content.eyebrow}</Eyebrow><SectionTitle id="personal-title">{content.title}</SectionTitle></SectionHead>
    <ScrollReveal><PersonalIntro>{content.intro}</PersonalIntro></ScrollReveal>
    <StoryGrid>
      {content.stories.map((story, index) => (
        <ScrollReveal key={story.title} delay={index * STORY_STAGGER_MS}>
          <Story><span className="marker">{story.marker}</span><h3>{story.title}</h3><p>{story.description}</p></Story>
        </ScrollReveal>
      ))}
    </StoryGrid>
  </Section>
)
