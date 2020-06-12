describe('Cancellation page', () => {
	beforeEach(() => {
		Cypress.Cookies.debug(true)
		cy.visit('/signin')
		cy.wait(2000);
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
		cy.get('#cancellationlink').click();	
	});

	it('has the correct <h3>', () => {
		cy.url().should('include', '/cancellation');
	});
});
	
