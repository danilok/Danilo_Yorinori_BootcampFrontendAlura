import React from 'react';
import UserEvent from '@testing-library/user-event';
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
      const user = UserEvent.setup();
      await act(async () => render(
        <FormContent
          onClose={() => { }}
          onSubmit={onSubmit}
        />,
      ));

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();

      const inputName = screen.getByPlaceholderText('Fulano de tal');
      await user.type(inputName, 'somename');
      await waitFor(() => expect(inputName).toHaveValue('somename'));

      const inputEmail = screen.getByPlaceholderText('fulano@email.com');
      await user.type(inputEmail, 'some@email.com');
      await waitFor(() => expect(inputEmail).toHaveValue('some@email.com'));

      const textareaMessage = screen.getByPlaceholderText('Escreva sua mensagem');
      await user.type(textareaMessage, 'testing message');
      await waitFor(() => expect(textareaMessage).toHaveValue('testing message'));

      expect(button).not.toBeDisabled();

      await user.click(button);

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    describe('displays the respective errors', () => {
      test('of name field', async () => {
        await act(async () => render(
          <FormContent
            onClose={() => { }}
            onSubmit={onSubmit}
          />,
        ));

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        const inputName = screen.getByPlaceholderText('Fulano de tal');
        inputName.focus();
        act(() => {
          inputName.blur();
        });
        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert'))
          .toHaveTextContent('Preencha ao menos 2 caracteres');

        expect(button).toBeDisabled();
      });

      test('of email field', async () => {
        await act(async () => render(
          <FormContent
            onClose={() => { }}
            onSubmit={onSubmit}
          />,
        ));

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        const inputEmail = screen.getByPlaceholderText('fulano@email.com');
        inputEmail.focus();
        act(() => {
          inputEmail.blur();
        });
        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert'))
          .toHaveTextContent('"Email" é obrigatório');

        expect(button).toBeDisabled();
      });

      test('of message field', async () => {
        await act(async () => render(
          <FormContent
            onClose={() => { }}
            onSubmit={onSubmit}
          />,
        ));

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        const textareaField = screen.getByPlaceholderText('Escreva sua mensagem');
        textareaField.focus();
        act(() => {
          textareaField.blur();
        });
        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert'))
          .toHaveTextContent('"Mensagem" é obrigatório');

        expect(button).toBeDisabled();
      });
    });
  });
});
