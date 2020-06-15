describe('Member crud pages', () => {
	beforeEach(() => {
		cy.visit('/signin')
		cy.wait(600);
		cy.get('#email').type('karel@gmail.com');
		cy.get('#password').type('karel');
		cy.get('#submit').click();
		cy.get('#memberslink').click();
	});

	it('can navigate to the attendance page', () => {
		cy.get('#addMemberButton').click();
		cy.url().should('include', '/members/create');
	});

	it('has the correct <h2> header', () => {
		cy.get('#addMemberButton').click();
		cy.contains('h2', 'Create new member');
	});

	it('can create, view, edit and remove a member', () => {
		cy.contains('li', 'Test Name').should('not.exist');
		cy.contains('li', 'Name Test').should('not.exist');
		cy.get('#addMemberButton').click();
		cy.get('#memberName').find('input').type('Test Name');
		cy.get('select').select('Leiding');
		cy.contains('Save').click()
		cy.wait(200);
		cy.contains('li', 'Test Name')
			.find('button')
			.click();
		cy.get('#memberName').find('input').clear().type('Name Test');
		cy.get('select').select('Roverscout');
		cy.contains('Save').click();
		cy.wait(200);
		cy.contains('li', 'Test Name').should('not.exist');
		cy.contains('li', 'Name Test')
			.find('button')
			.click();
		cy.contains('Delete').click();
		cy.wait(200);
		cy.contains('li', 'Name Test').should('not.exist');
	});
});

