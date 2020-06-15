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

	it('has all the links available', () => {
		cy.contains('Attendance');
		cy.contains('Cancellation');
		cy.contains('Members');
		cy.contains('Program');
	});
});

