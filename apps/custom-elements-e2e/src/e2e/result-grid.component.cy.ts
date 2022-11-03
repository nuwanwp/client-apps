describe('custom-elements', () => {
  beforeEach(() => cy.visit('/iframe.html?id=resultgridcomponent--primary'));
  it('should render the component', () => {
    cy.get('client-apps-result-grid').should('exist');
  });
});
