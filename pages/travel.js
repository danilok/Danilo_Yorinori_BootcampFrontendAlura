/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';
import Text from '../src/components/foundation/Text';
import TextField from '../src/components/forms/TextField';
import countries from '../src/data/countries';

const FormWrapper = styled.div`
`;

const SubmitButton = styled.button`
`;

const RadioButtonGroup = styled.div`
  input {
      visibility:hidden;
  }
  label {
      cursor: pointer;
  }
  input:checked + label {
      background: rgba(211, 234, 255, 0.56);
  }
`;

export default function Travels() {
  const [travelInfo, setTravelInfo] = React.useState({
    departureDate: '',
    arrivalDate: '',
    departureLocation: '',
    arrivalLocation: '',
    payment: '',
    firstname: '',
    lastname: '',
    country: 'BR',
    birthDate: '',
    cpf: '',
    email: '',
    telephone: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setTravelInfo({
      ...travelInfo,
      [fieldName]: event.target.value,
    });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Alura Viagens - Danilo Yorinori</title>
          <meta name="title" content="Alura Viagens" />
          <meta name="description" content="Alura Viagens - Danilo Yorinori" />
          <meta property="og:title" content="Alura Viagens" key="title" />
          <meta property="og:description" content="Alura Viagens - Danilo Yorinori" key="description" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://danilo-yorinori-bootcamp-frontend-alura.vercel.app" />
          <meta property="og:image" content="https://danilo-yorinori-bootcamp-frontend-alura.vercel.app/images/homepage.png" />
        </Head>
        <FormWrapper>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              const dadosDoForm = new FormData(event.target);
              dadosDoForm.forEach((value, key) => console.log(`${key}: ${value}`));

              console.log(travelInfo);
            }}
          >
            <h1>Alura Viagens</h1>
            <h2>Quando será a viagem?</h2>

            <Text
              as="label"
              variant="label"
            >
              Data de saída
            </Text>
            <TextField
              placeholder=""
              name="departureDate"
              type="date"
              value={travelInfo.departureDate}
              onChange={handleChange}
            />

            <Text
              as="label"
              variant="label"
            >
              Data de retorno
            </Text>
            <TextField
              placeholder=""
              name="arrivalDate"
              type="date"
              value={travelInfo.arrivalDate}
              onChange={handleChange}
            />

            <Text
              as="label"
              variant="label"
            >
              Local de origem
            </Text>
            <TextField
              placeholder="Origem"
              name="departureLocation"
              value={travelInfo.departureLocation}
              onChange={handleChange}
            />

            <Text
              as="label"
              variant="label"
            >
              Local de chegada
            </Text>
            <TextField
              placeholder="Destino"
              name="arrivalLocation"
              value={travelInfo.arrivalLocation}
              onChange={handleChange}
            />

            <h2>
              Como será o pagamento?
            </h2>

            <RadioButtonGroup>
              <input type="radio" id="transfer" name="payment" value="transfer" />
              <Text
                as="label"
                variant="label"
                htmlFor="transfer"
              >
                <img src="/images/icons/transfer.svg" alt="money transfer" />
                Transferência
              </Text>
              <input type="radio" id="credit-card" name="payment" value="credit-card" />
              <Text
                as="label"
                variant="label"
                htmlFor="credit-card"
              >
                <img src="/images/icons/creditcard.svg" alt="credit card" />
                Cartão de crédito
              </Text>
              <input type="radio" id="paypal" name="payment" value="paypal" />
              <Text
                as="label"
                variant="label"
                htmlFor="paypal"
              >
                <img src="/images/icons/paypal.svg" alt="paypal" />
                PayPal
              </Text>
            </RadioButtonGroup>

            <h2>Quem vai viajar?</h2>
            <Text
              as="label"
              variant="label"
            >
              Nome
            </Text>
            <TextField
              placeholder="Seu primeiro nome"
              name="firstname"
              value={travelInfo.firstname}
              onChange={handleChange}
            />

            <Text
              as="label"
              variant="label"
            >
              Sobrenome
            </Text>
            <TextField
              placeholder="Seu sobrenome"
              name="lastname"
              value={travelInfo.lastname}
              onChange={handleChange}
            />

            <Text
              as="label"
              variant="label"
            >
              País de residência
            </Text>
            <select
              name="country"
              value={travelInfo.country}
              onChange={handleChange}
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.text}
                </option>
              ))}
            </select>

            <br />

            <Text
              as="label"
              variant="label"
            >
              Data de nascimento
            </Text>
            <TextField
              placeholder=""
              name="birthDate"
              type="date"
              value={travelInfo.birthDate}
              onChange={handleChange}
            />

            <Text
              as="label"
              variant="label"
            >
              CPF
            </Text>
            <TextField
              placeholder="000.000.000-00"
              name="cpf"
              value={travelInfo.cpf}
              onChange={handleChange}
            />

            <Text
              as="label"
              variant="label"
            >
              E-mail
            </Text>
            <TextField
              placeholder="Seu e-email para contato"
              name="email"
              value={travelInfo.email}
              onChange={handleChange}
            />

            <Text
              as="label"
              variant="label"
            >
              Telefone
            </Text>
            <TextField
              placeholder="(__) _____-____"
              name="telephone"
              value={travelInfo.telephone}
              onChange={handleChange}
            />

            <SubmitButton
              type="submit"
            >
              Comprar
            </SubmitButton>
          </form>
        </FormWrapper>
      </ThemeProvider>
    </>
  );
}
