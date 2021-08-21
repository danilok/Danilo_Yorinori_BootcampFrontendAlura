/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import TextareaField from '../../forms/TextareaField';
import CloseButton from '../../commons/CloseButton';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

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

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function FormContent() {
  const [contactMessageData, setContactMessageData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setContactMessageData({
      ...contactMessageData,
      [fieldName]: event.target.value,
    });
  }

  const anyEmptyFields = Object.values(contactMessageData)
    .reduce((valid, field) => (field.length === 0 ? true : valid), false);

  const validEmail = validateEmail(contactMessageData.email);

  const isFormInvalid = anyEmptyFields || !validEmail;

  return (
    <Form
      onSubmit={async (event) => {
        event.preventDefault();

        const contactMessageDTO = {
          name: contactMessageData.name,
          email: contactMessageData.email,
          message: contactMessageData.message,
        };

        try {
          const respostaDoServidor = await fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactMessageDTO),
          });
          if (!respostaDoServidor.ok) {
            throw Error('Não foi possível enviar a mensagem');
          }

          const respostaConvertida = await respostaDoServidor.json();
          // eslint-disable-next-line no-console
          console.log('Resposta com sucesso', respostaConvertida);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      }}
    >
      <Text
        as="p"
        variant="contact"
        color="primary.main"
        textAlign="center"
        margin="0"
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
        height="75%"
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
            value={contactMessageData.name}
            onChange={handleChange}
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
            value={contactMessageData.email}
            onChange={handleChange}
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
            value={contactMessageData.message}
            onChange={handleChange}
          />
        </div>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Button
          as="button"
          type="submit"
          disabled={isFormInvalid}
        >
          <Text
            as="label"
            variant="label"
            color="primary.main"
            margin="0 10px 0 0"
          >
            Enviar
          </Text>
          <img alt="Entrar em contato" src="images/icons/send_button.svg" />
        </Button>
      </Box>
    </Form>
  );
}

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
          <CloseButton onClose={onClose} />

          <FormContent />
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