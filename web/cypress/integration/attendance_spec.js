describe('Attendance page', () => {
	beforeEach(() => {
		cy.visit('/signin')
		cy.wait(2000);
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
		cy.get('#attendancelink').click();	
		cy.wait(2000);
	});

	it('has the correct <h3>', () => {
		cy.url().should('include', '/');
	});
});
	
