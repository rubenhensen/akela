describe('Register page', () => {
	beforeEach(() => {
		cy.visit('/register')
	});

	it('has the correct <h2>', () => {
		cy.contains('h2', 'Register')
	});
});
