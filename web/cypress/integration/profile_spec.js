describe('Profile page', () => {
	beforeEach(() => {
		cy.visit('/signin')
		cy.wait(600);
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
		cy.contains('account_box').click();	
	});

	it('can navigate to the attendance page', () => {
		cy.url().should('include', '/profile');
	});

	it('has the correct <h3> headers', () => {
		cy.contains('Naam');
	});
});
	
