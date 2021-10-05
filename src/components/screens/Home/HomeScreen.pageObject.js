export default class HomeScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/');
  }

  getContactFormButton() {
    return this.cy.get('#contactForm button[type="submit"]');
  }

  pressContactButton() {
    this.cy.get('#contactBtn').click();
    return this;
  }

  fillContactForm({ name, email, message }) {
    this.cy.get('#contactForm input[name="name"]').type(name);
    this.cy.get('#contactForm input[name="email"]').type(email);
    this.cy.get('#contactForm textarea[name="message"]').type(message);
    return this;
  }

  submitContactForm() {
    this.getContactFormButton().click();
    return this;
  }
}
