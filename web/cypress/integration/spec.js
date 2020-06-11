describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/signin')
	});

	it('has the correct <h2>', () => {
		cy.contains('h2', 'Sign in')
	});

//	it('navigates to /about', () => {
//		cy.get('nav a').contains('about').click();
//		cy.url().should('include', '/about');
//	});
//
//	it('navigates to /blog', () => {
//		cy.get('nav a').contains('blog').click();
//		cy.url().should('include', '/blog');
//	});
});
