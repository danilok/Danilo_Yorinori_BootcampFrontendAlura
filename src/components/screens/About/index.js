/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import SectionTitle from '../../commons/SectionTitle';
import Grid from '../../foundation/layout/Grid';
import AboutWrapper from './styles/AboutWrapper';
import getContent from './getContent';

export { getContent };

export default function AboutScreen({ repos, about }) {
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
              <img alt="Sobre mim" src="/images/icons/add_button.svg" />
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
                  {about.descriptionP1}
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
                  {about.descriptionP2}
                </Text>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>
                <Text
                  tag="p"
                  variant="paragraph1"
                  textAlign={{
                    xs: 'center',
                  }}
                >
                  {about.local}
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
                      color="primary.main"
                    >
                      {item.name}
                    </Text>
                    <Text
                      tag="p"
                      variant="paragraph1"
                      color="secondary.main"
                      href={item.url}
                    >
                      {item.url}
                    </Text>
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
  about: PropTypes.shape({
    local: PropTypes.string,
    descriptionP1: PropTypes.string,
    descriptionP2: PropTypes.string,
  }).isRequired,
};
