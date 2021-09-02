/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import SectionTitle from '../../commons/SectionTitle';
import Grid from '../../foundation/layout/Grid';
import Link from '../../commons/Link';
import AboutWrapper from './styles/AboutWrapper';

export default function AboutScreen({ repos }) {
  const [showText, setShowText] = React.useState(true);
  const githubUser = 'danilok';
  return (
    <AboutWrapper>
      <SectionTitle>
        Sobre mim
      </SectionTitle>
      <Grid.Container>
        <Grid.Row
          marginLeft={0}
          marginRight={0}
          flex={1}
        >
          <Grid.Col>
            <AboutWrapper.ProfilePhoto
              width={{
                xs: '280px',
                md: '450px',
              }}
              height={{
                xs: '280px',
                md: '450px',
              }}
            >
              <img src={`https://github.com/${githubUser}.png`} alt="Imagem do perfil" />
            </AboutWrapper.ProfilePhoto>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <AboutWrapper.Button
              type="button"
              onClick={() => {
                setShowText(!showText);
              }}
            >
              <img alt="Sobre mim" src="images/icons/add_button.svg" />
            </AboutWrapper.Button>
          </Grid.Col>
        </Grid.Row>
        {showText && (
          <Grid.Container
            maxWidth={{
              md: '600px',
            }}
          >
            <Grid.Row
              display="flex"
              justifyContent="center"
              flexDirection={{
                xs: 'column',
                md: 'row',
              }}
              paddingRight={{
                xs: '0',
                md: '0',
              }}
              paddingLeft={{
                xs: '0',
                md: '0',
              }}
              flex={1}
              value={{
                xs: 12,
                md: 5,
                lg: 4,
              }}
            >
              <Grid.Col>
                <Text
                  tag="p"
                  variant="paragraph1"
                  textAlign="left"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam corrupti tempore in vitae
                  iure itaque possimus assumenda quis!
                  Cum dicta facilis non dolor eum fugit tempora corporis atque omnis aperiam.
                </Text>
              </Grid.Col>
              <Grid.Col>
                <Text
                  tag="p"
                  variant="paragraph1"
                  textAlign={{
                    xs: 'left',
                    md: 'right',
                  }}
                >
                  Mussum Ipsum, cacilds vidis litro abertis.
                  Admodum accumsan disputationi eu sit.
                  Vide electram sadipscing et per.
                  Per aumento de cachacis, eu reclamis.
                  Paisis, filhis, espiritis santis.
                  Cevadis im ampola pa arma uma pindureta.
                </Text>
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        )}
        <Grid.Row>
          <Grid.Col>
            <AboutWrapper.RepositoriesSection
              paddingTop="32px"
            >
              Meus repositórios
            </AboutWrapper.RepositoriesSection>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row
          marginLeft={0}
          marginRight={0}
          flex={1}
          justifyContent="center"
        >
          <Grid.Col
            display="flex"
            justifyContent="center"
            paddingRight={{
              xs: '0',
              md: '0',
            }}
            paddingLeft={{
              xs: '0',
              md: '0',
            }}
            flex={1}
            value={{
              xs: 12,
            }}
          >
            <AboutWrapper.RepositoriesList
              as="ul"
            >
              {repos.map((item) => (
                <li key={item.id}>
                  <div style={{ display: 'block' }}>
                    <Text
                      tag="p"
                      variant="paragraph1"
                      textTransform="capitalize"
                      fontWeight="bold"
                    >
                      {item.name}
                    </Text>
                    <Link href={item.url}>
                      <Text
                        tag="p"
                        variant="paragraph1"
                      >
                        {item.url}
                      </Text>
                    </Link>
                  </div>
                </li>
              ))}
            </AboutWrapper.RepositoriesList>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </AboutWrapper>
  );
}

AboutScreen.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};
