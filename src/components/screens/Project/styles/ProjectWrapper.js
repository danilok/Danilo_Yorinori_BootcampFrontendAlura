import styled, { css } from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const ProjectWrapper = styled.div`
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

ProjectWrapper.Image = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border: 1px solid ${({ theme }) => theme.colors.background.dark.color};
    ${propToStyle('width')}
    ${propToStyle('height')}
  }
`;

export default ProjectWrapper;
