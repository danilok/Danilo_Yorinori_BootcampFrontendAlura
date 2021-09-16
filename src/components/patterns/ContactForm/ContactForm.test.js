import React from 'react';
import user from '@testing-library/user-event';
import { FormContent } from './index';
import {
  render,
  screen,
  act,
  waitFor,
} from '../../../infra/test/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<ContactForm />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      await act(async () => render(
        <FormContent
          onClose={() => { }}
          onSubmit={onSubmit}
        />,
      ));

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();

      const inputName = screen.getByPlaceholderText('Fulano de tal');
      user.type(inputName, 'somename');
      await waitFor(() => expect(inputName).toHaveValue('somename'));

      const inputEmail = screen.getByPlaceholderText('fulano@email.com');
      user.type(inputEmail, 'some@email.com');
      await waitFor(() => expect(inputEmail).toHaveValue('some@email.com'));

      const textareaMessage = screen.getByPlaceholderText('Escreva sua mensagem');
      user.type(textareaMessage, 'testing message');
      await waitFor(() => expect(textareaMessage).toHaveValue('testing message'));

      expect(button).not.toBeDisabled();

      user.click(button);

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    describe('displays the respective errors', () => {
      test('of name field', async () => {
        render(
          <FormContent
            onClose={() => { }}
            onSubmit={onSubmit}
          />,
        );

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        const inputName = screen.getByPlaceholderText('Fulano de tal');
        inputName.focus();
        inputName.blur();
        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert'))
          .toHaveTextContent('Preencha ao menos 2 caracteres');

        expect(button).toBeDisabled();
      });

      test('of email field', async () => {
        render(
          <FormContent
            onClose={() => { }}
            onSubmit={onSubmit}
          />,
        );

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        const inputEmail = screen.getByPlaceholderText('fulano@email.com');
        inputEmail.focus();
        inputEmail.blur();
        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert'))
          .toHaveTextContent('"Email" é obrigatório');

        expect(button).toBeDisabled();
      });

      test('of message field', async () => {
        render(
          <FormContent
            onClose={() => { }}
            onSubmit={onSubmit}
          />,
        );

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        const textareaField = screen.getByPlaceholderText('Escreva sua mensagem');
        textareaField.focus();
        textareaField.blur();
        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert'))
          .toHaveTextContent('"Mensagem" é obrigatório');

        expect(button).toBeDisabled();
      });
    });
  });
});
