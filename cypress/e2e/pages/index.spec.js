/// <reference types="cypress" />
import HomeScreenPageObject from '../../../src/components/screens/Home/HomeScreen.pageObject';

describe('/pages/index', () => {
  describe('when click contact button and modal is open', () => {
    describe('fill form fields correctly', () => {
      it.skip('and submit the message', () => {
        // Pré-teste
        cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
          .as('sendMessage');

        const data = {
          name: 'Teste',
          email: 'teste@teste.com',
          message: 'Uma mensagem de teste',
        };

        // Cenário
        const homeScreen = new HomeScreenPageObject(cy);
        homeScreen
          .pressContactButton()
          .fillContactForm(data)
          .submitContactForm();

        // Asserções
        cy.wait('@sendMessage')
          .then((intercepted) => {
            const response = intercepted.response.body;
            expect(response).contains(data);
          });
      });
    });

    describe('fill form fields wrongly', () => {
      it.skip('and check submission button is deactivated', () => {
        const data = {
          name: 'Teste',
          email: 'teste@teste',
          message: 'Uma mensagem de teste',
        };

        // Cenário
        const homeScreen = new HomeScreenPageObject(cy);
        homeScreen
          .pressContactButton()
          .fillContactForm(data);

        // Asserções
        homeScreen
          .getContactFormButton()
          .should('have.attr', 'disabled');
      });
    });
  });
});
