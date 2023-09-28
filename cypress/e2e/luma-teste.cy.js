
describe('Carrinho de Compras', () => {
  it('Validar alteração da quantidade do produto na página do carrinho', () => {
    cy.visit('https://magento.softwaretestingboard.com/breathe-easy-tank.html');
    cy.get('.swatch-attribute.size').find('div').eq(2).should('not.be.disabled').click();
    cy.get('.swatch-attribute.color').find('div').eq(2).should('not.be.disabled').click();
    cy.get('input[name="qty"]').clear().type('2');
    cy.get('button[id="product-addtocart-button"]').contains("Add to Cart").click();
    cy.get('.messages').contains('You added Breathe-Easy Tank to your');
    cy.wait(1000);
    cy.get('.action.showcart').click();
    cy.contains("View and Edit Cart").click( {force: true} );
    cy.url().should('include', '/checkout/cart/');
    cy.get('div[class="control qty"]').find('input').clear().type('3');
    cy.get('button[name="update_cart_action"]').contains('Update Shopping Cart').click();
    cy.get('.input-text.qty').should('have.value', '3');
  })

  it('Validar alteração da quantidade do produto adicionado no carrinho flutuante', () => {
    cy.visit('https://magento.softwaretestingboard.com/breathe-easy-tank.html');
    cy.get('.swatch-attribute.size').find('div').eq(2).should('not.be.disabled').click();
    cy.get('.swatch-attribute.color').find('div').eq(2).should('not.be.disabled').click();
    cy.get('input[name="qty"]').clear().type('2');
    cy.get('button[id="product-addtocart-button"]').contains("Add to Cart").click();
    cy.get('.messages').contains('You added Breathe-Easy Tank to your');
    cy.wait(1000);
    cy.get('.action.showcart').click();
    cy.get('div[class="details-qty qty"]').find('input').clear().type('3');
    cy.get('button[class="update-cart-item"]').contains('Update').should('not.be.disabled').click();
    cy.get('div[class="details-qty qty"]').find('input').should('have.value', '3');
  })

  it('Validar adição de produto no carrinho escolhendo tamanho e cor', () => {
    cy.visit('https://magento.softwaretestingboard.com/argus-all-weather-tank.html')
    cy.get('.swatch-attribute.size').find('div').eq(2).should('not.be.disabled').click();
    cy.get('.swatch-attribute.color').find('div').eq(1).should('not.be.disabled').click();
    cy.get('button[id="product-addtocart-button"]').contains("Add to Cart").click();
    cy.get('.messages').contains('The requested qty is not available');
  })

})