import { React } from 'react';
import CloseButton from '.';

describe('<CloseButton>', () => {
  it('mounts', () => {
    // Arrange
    const resetForm = cy.spy().as('resetForm');
    const onClose = cy.spy().as('onClose');
    cy.mount(<CloseButton onClose={onClose} resetForm={resetForm} />);
    // Act
    cy.get('#closeBtn').click({ force: true });
    // Assert
    cy.get('@resetForm').should('have.been.called.with', 1);
    cy.get('@onClose').should('have.been.called.with', 1);
  });
});
