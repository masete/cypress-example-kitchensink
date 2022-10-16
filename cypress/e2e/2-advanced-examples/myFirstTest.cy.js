context('my first test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/commands/actions')
    })

    it('has an h1 on the page', () => {
        cy.get('h1').should('exist');
    }),
    it('renders the correct h1 element', ()=>{
        cy.get('h1').should('contain.text', 'Actions')
    }),
    it('renders a paragraph under h1', () => {
        cy.get('.container').eq(1).find('p').should('exist')
        //targetting the second container, but second is not a function so we use equal, input index of 1
    })
}) 