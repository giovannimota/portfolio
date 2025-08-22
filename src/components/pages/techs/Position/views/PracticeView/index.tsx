// External Libraries
import React from 'react'

// Components
import { FixedView } from './views/FixedView'
import { StickyView } from './views/StickyView'
import { StaticView } from './views/StaticView'
import { RelativeView } from './views/RelativeView'
import { AbsoluteView } from './views/AbsoluteView'

// Types
import { Position } from '../../types'

// Styles
import { Container } from './styles'

interface Props {
  position: Position
}

export const PracticeView: React.FC<Props> = ({ position }) => {
  // Functions
  function renderContent() {
    if (position === 'fixed') return <FixedView />
    if (position === 'sticky') return <StickyView />
    if (position === 'static') return <StaticView />
    if (position === 'relative') return <RelativeView />
    if (position === 'absolute') return <AbsoluteView />
    return null
  }

  return <Container>{renderContent()}</Container>
}
