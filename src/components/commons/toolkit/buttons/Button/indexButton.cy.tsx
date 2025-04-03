// External Libraries
import React from 'react'
import { mount } from 'cypress/react'

// Components
import { Button } from '.'

describe('<Button />', () => {
  it('renders', () => {
    cy.mount(<Button label="Clique aqui" />)
    cy.contains('Clique aqui').should('be.visible')
  })

  it('Deve chamar a função ao clicar', () => {
    const onClick = cy.spy()
    mount(<Button label="Clique" onClick={onClick} />)
    cy.get('button').click()
    cy.wrap(onClick).should('have.been.calledOnce')
  })
})
