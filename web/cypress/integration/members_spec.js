describe('Members page', () => {
	beforeEach(() => {
		cy.visit('/signin')
		cy.wait(600);
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
		cy.get('#memberslink').click();	
	});

	it('can navigate to the members page', () => {
		cy.url().should('include', '/members');
	});

	it('has an add member button', () => {
		cy.contains('button', 'Add member');
	});
});
	
