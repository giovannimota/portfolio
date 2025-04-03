describe('Home Page', () => {
  it('Deve carregar a página inicial corretamente', () => {
    cy.visit('/')
    cy.contains('Giovanni Mota').should('be.visible')
  })
})
