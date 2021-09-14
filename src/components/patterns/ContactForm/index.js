/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import styled, { css } from 'styled-components';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import TextareaField from '../../forms/TextareaField';
import CloseButton from '../../commons/CloseButton';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import errorAnimation from './animations/error.json';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import FormFeedback from '../FormFeedback';
import useForm from '../../../infra/hooks/form/useForm';
import contactService from '../../../services/contact/contactService';

const Button = styled.div`
  border: 0px;
  cursor: pointer;
  margin: 10px 0;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background-color: inherit;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
`;

const Form = styled.form`
  flex: 1;
  ${breakpointsMedia({
    xs: css`
      padding-top: 50px;
    `,
    md: css`
      padding-top: 0;
    `,
  })}
`;

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('"Nome" é obrigatório')
    .min(2, 'Preencha ao menos 2 caracteres'),
  email: yup
    .string()
    .email('Email inválido')
    .required('"Email" é obrigatório'),
  message: yup
    .string()
    .required('"Mensagem" é obrigatório'),
});

function FormContent({ onClose }) {
  const [formState, setFormState] = React.useState(formStates.DEFAULT);
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: async (values) => {
      form.setIsFormDisabled(true);
      setFormState(formStates.LOADING);
      const contactMessageDTO = {
        name: values.name,
        email: values.email,
        message: values.message,
      };

      try {
        await contactService
          .sendMessage(contactMessageDTO);

        setTimeout(() => {
          setFormState(formStates.DONE);
        }, 1000);
      } catch (error) {
        setTimeout(() => {
          setFormState(formStates.ERROR);
        }, 1000);
      }
    },
    validateSchema: async (values) => contactSchema.validate(values, { abortEarly: false }),
  });

  function resetForm() {
    if (formState !== formStates.DONE) {
      return;
    }

    setFormState(formStates.DEFAULT);
    form.handleReset({
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <Form
      onSubmit={form.handleSubmit}
    >
      <CloseButton onClose={onClose} resetForm={resetForm} />

      <Text
        as="p"
        variant="contact"
        color="primary.main"
        textAlign="center"
        margin="0"
        textTransform="uppercase"
      >
        Envie sua mensagem
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        paddingTop={{
          xs: '24px',
          md: '30px',
        }}
        height={{
          xs: '72%',
          md: '75%',
        }}
      >
        <div>
          <Text
            as="label"
            variant="label"
            color="primary.main"
          >
            Seu nome
          </Text>
          <TextField
            id="name"
            placeholder="Fulano de tal"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            error={form.errors.name}
            isTouched={form.touchedFields.name}
            onBlur={form.handleBlur}
            disabled={formStates.LOADING === formState || formStates.DONE === formState}
          />
        </div>
        <div>
          <Text
            as="label"
            variant="label"
            color="primary.main"
          >
            Seu email
          </Text>
          <TextField
            placeholder="fulano@email.com"
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
            error={form.errors.email}
            isTouched={form.touchedFields.email}
            onBlur={form.handleBlur}
            disabled={formStates.LOADING === formState || formStates.DONE === formState}
          />
        </div>
        <div>
          <Text
            as="label"
            variant="label"
            color="primary.main"
          >
            Sua mensagem
          </Text>
          <TextareaField
            tag="textarea"
            placeholder="Escreva sua mensagem"
            name="message"
            value={form.values.message}
            onChange={form.handleChange}
            error={form.errors.message}
            isTouched={form.touchedFields.message}
            onBlur={form.handleBlur}
            disabled={formStates.LOADING === formState || formStates.DONE === formState}
          />
        </div>
      </Box>
      {!form.isFormSubmitted && (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Button
            as="button"
            type="submit"
            disabled={form.isFormDisabled}
          >
            <Text
              as="label"
              variant="label"
              color="primary.main"
              margin="0 10px 0 0"
            >
              Enviar
            </Text>
            <img alt="Entrar em contato" src="/images/icons/send_button.svg" />
          </Button>
        </Box>
      )}

      {form.isFormSubmitted && formState === formStates.LOADING && (
        <FormFeedback
          width={{
            xs: '50px',
            md: '60px',
          }}
          height={{
            xs: '50px',
            md: '60px',
          }}
          animation={loadingAnimation}
        />
      )}

      {form.isFormSubmitted && formState === formStates.DONE && (
        <FormFeedback
          width={{
            xs: '70px',
            md: '80px',
          }}
          height={{
            xs: '60px',
            md: '80px',
          }}
          animation={successAnimation}
        />
      )}

      {form.isFormSubmitted && formState === formStates.ERROR && (
        <FormFeedback
          width={{
            xs: '70px',
            md: '80px',
          }}
          height={{
            xs: '60px',
            md: '80px',
          }}
          animation={errorAnimation}
        />
      )}
    </Form>
  );
}

FormContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default function ContactForm({ modalProps }) {
  const { boxAttributes, onClose } = modalProps;
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
      alignItems="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{
          xs: '18px',
          md: '0',
        }}
        paddingLeft={{
          xs: '18px',
          md: '0',
        }}
        flex={1}
        value={{
          xs: 12,
          md: 5,
          lg: 4,
        }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          // justifyContent="center"
          paddingRight={{
            xs: '16px',
            md: '45px',
          }}
          paddingLeft={{
            xs: '16px',
            md: '45px',
          }}
          backgroundColor="white"
          height={{
            xs: '600px',
            md: '675px',
          }}
          width={{
            xs: '360px',
            md: '900px',
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...boxAttributes}
        >
          <FormContent onClose={onClose} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

ContactForm.propTypes = {
  modalProps: PropTypes.shape({
    boxAttributes: PropTypes.shape({
      'data-modal-safe-area': PropTypes.string.isRequired,
    }),
    onClose: PropTypes.func,
  }).isRequired,
};
