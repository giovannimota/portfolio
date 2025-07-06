'use client'

// External Libraries
import React from 'react'

// Components

// Hooks
import { useFlexboxContext } from '@pages/techs/Flexbox/hooks/useFlexboxContext'

// Styles
import { Container, FlexItem } from './styles'

interface Props {
  // Props
}

export const EnvironmentView: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const FLEX_ITEMS = [
    {
      id: 'item-1',
      label: 'Item 1'
    },
    {
      id: 'item-2',
      label: 'Item 2'
    },
    {
      id: 'item-3',
      label: 'Item 3'
    }
  ]

  // Hooks
  const { flexboxConfig, flexItemConfig } = useFlexboxContext()

  // Functions
  function renderFlexItems() {
    return FLEX_ITEMS.map(item => (
      <FlexItem
        layout
        key={item.id}
        className="flex-item"
        $width={flexItemConfig.width}
        $height={flexItemConfig.height}
        $backgroundColor={flexItemConfig.backgroundColor}
        transition={{ type: 'spring', stiffness: 500, damping: 60 }}
      >
        {item.label}
      </FlexItem>
    ))
  }

  return (
    <Container
      layout
      transition={{ duration: 0.4 }}
      $alignItems={flexboxConfig.alignItems}
      $flexDirection={flexboxConfig.flexDirection}
      $justifyContent={flexboxConfig.justifyContent}
    >
      {renderFlexItems()}
    </Container>
  )
}
