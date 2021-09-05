import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('paddingRight')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('paddingTop')}
  ${propToStyle('height')}
  ${propToStyle('width')}
  ${propToStyle('textAlign')}
`;

export default Box;
