describe('Sign in page', () => {
	beforeEach(() => {
		cy.visit('/signin')
	});

	it('has the correct <h2>', () => {
		cy.contains('h2', 'Sign in')
	});
	
	it('can log in', () => {
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
		cy.url().should('include', '/');
	});
});
