describe('Cancellation page', () => {
	beforeEach(() => {
		cy.visit('/signin')
		cy.wait(600);
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
		cy.get('#cancellationlink').click();
	});

	it('can navigate to the cancellation page', () => {
		cy.url().should('include', '/cancellation');
	});

	it('has the correct <h3> headers', () => {
		cy.contains('h3', 'Verwacht');
		cy.contains('h3', 'Afgemeld');
	});
});

