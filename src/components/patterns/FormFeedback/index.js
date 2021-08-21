import React from 'react';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import { PropTypes } from 'prop-types';
import Box from '../../foundation/layout/Box';
import propToStyle from '../../../theme/utils/propToStyle';

const LottieWrapper = styled(Lottie)`
  ${propToStyle('width')}
  ${propToStyle('height')}
`;

export default function FormFeedback({ width, height, animation }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
    >
      <LottieWrapper
        width={width}
        height={height}
        className="lottie-container basic"
        config={{ animationData: animation, loop: false, autoplay: true }}
      />
    </Box>
  );
}

FormFeedback.propTypes = {
  width: PropTypes.shape({}),
  height: PropTypes.shape({}),
  animation: PropTypes.shape({}).isRequired,
};

FormFeedback.defaultProps = {
  width: {},
  height: {},
};
