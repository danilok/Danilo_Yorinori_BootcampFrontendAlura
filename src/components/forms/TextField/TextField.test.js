import React from 'react';
import UserEvent from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Danilo"
        onChange={() => { }}
        name="nome"
      />,
    );
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', async () => {
        const user = UserEvent.setup();
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
          />,
        );
        const inputNome = screen.getByPlaceholderText(/nome/i);
        await user.type(inputNome, 'Danilo');
        expect(onChangeMock).toHaveBeenCalledTimes(6);
      });
    });
  });

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="daniloemail.teste.com"
          onChange={() => { }}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />,
      );
      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('daniloemail.teste.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
