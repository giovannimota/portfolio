import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;

  grid-gap: 0.5rem;
`

interface TabProps {
  $selected: boolean
}

export const Tab = styled.button<TabProps>`
  width: 100%;

  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary : theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
`
