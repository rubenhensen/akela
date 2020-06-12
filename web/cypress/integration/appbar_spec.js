describe('Appbar', () => {
	beforeEach(() => {
		cy.visit('/signin')
		cy.wait(600);
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
	});

	it('has the correct headers', () => {
		cy.contains('span', 'MBG');
	});

	it('has a profile button', () => {
		cy.contains('button', 'account_box');
	});
});
	
