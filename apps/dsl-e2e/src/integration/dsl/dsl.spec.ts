describe('dsl: Dsl component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dsl--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Dsl!');
    });
});
