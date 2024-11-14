// External Libraries
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { SectionCard } from '../SectionCard'
import { Button } from '@components/toolkit/buttons/Button'

// Utils
import { decrement, increment } from '@services/store/counter'

// Types
import { RootState } from '@services/store/store'

// Styles
import { ButtonsRow, Container } from './styles'

export const ReduxCounter: React.FC = () => {
  // Hooks
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.counter.value)

  return (
    <SectionCard>
      <Container>
        <h3>Redux Counter</h3>
        <p>Counter: {count}</p>

        <ButtonsRow>
          <Button label="Less" onClick={() => dispatch(decrement())} />
          <Button label="More" onClick={() => dispatch(increment())} />
        </ButtonsRow>
      </Container>
    </SectionCard>
  )
}
