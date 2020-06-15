describe('Attendance page', () => {
	beforeEach(() => {
		cy.visit('/signin')
		cy.wait(600);
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
		cy.get('#attendancelink').click();
	});

	it('can navigate to the attendance page', () => {
		cy.url().should('include', '/');
	});

	it('has the correct <h3> headers', () => {
		cy.contains('h3', 'Aangemeld');
		cy.contains('h3', 'Aanwezig');
		cy.contains('h3', 'Afgemeld');
	});
});

