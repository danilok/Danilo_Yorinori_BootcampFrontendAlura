import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../../foundation/Text';
import propToStyle from '../../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const AboutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  text-align: center;
  ${breakpointsMedia({
    xs: css`
      padding-bottom: 130px;
    `,
  })}
`;

AboutWrapper.ProfilePhoto = styled.div`
  margin-top: 20px;
  img {
    ${propToStyle('width')}
    ${propToStyle('height')}
    border-radius: 50%;
  }
`;

AboutWrapper.Button = styled.button`
  border: 0px;
  cursor: pointer;
  margin-top: 20px;
  background-color: inherit;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

AboutWrapper.RepositoriesSection = styled.section`
  color: ${({ theme }) => theme.colors.primary.main.color};

  ${TextStyleVariantsMap.sectionTitle}
  text-transform: uppercase;

  ${propToStyle('textAlign')}
  ${propToStyle('paddingTop')}
  ${propToStyle('paddingBottom')}
`;

AboutWrapper.RepositoriesList = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;

  li {
    box-sizing: border-box;
    padding: 8px 0;
    margin-left: -40px;
  }
`;

export default AboutWrapper;
