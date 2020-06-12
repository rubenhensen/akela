describe('Attendance page', () => {
	beforeEach(() => {
		cy.visit('/signin')
		cy.wait(400);
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
		cy.wait(400);
		cy.get('#cancellationlink').click();	
	});

	it('has the correct <h3>', () => {
		cy.url().should('include', '/cancellation');
	});
});
	
