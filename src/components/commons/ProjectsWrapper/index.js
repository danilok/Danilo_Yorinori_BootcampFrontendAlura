import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import SectionTitle from '../SectionTitle';
import Card from '../Card';
import Contact from '../Contact';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  margin-top: 0px;
  height: 100%;
  overflow: scroll;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  max-width: 900px;
  margin: 0 auto;
  
  ${breakpointsMedia({
    md: css`
      flex-direction: row;
    `,
  })}
`;

export default function ProjectsWrapper({ cards, onClickContact }) {
  return (
    <Container>
      <SectionTitle>
        Meus projetos
      </SectionTitle>
      <ProjectList>
        {cards.map((cardItem) => (
          cardItem.highlight
            ? (
              <Card
                width={{
                  md: '100%',
                }}
                card={cardItem}
                key={cardItem.title}
              />
            )
            : (
              <Card
                card={cardItem}
                key={cardItem.title}
              />
            )
        ))}
      </ProjectList>
      <Contact
        onClick={() => {
          onClickContact();
        }}
      />
    </Container>
  );
}

const cardShape = PropTypes.shape({
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
});

ProjectsWrapper.propTypes = {
  cards: PropTypes.arrayOf(cardShape),
  onClickContact: PropTypes.func.isRequired,
};

ProjectsWrapper.defaultProps = {
  cards: [],
};
