import { css } from 'styled-components';
import { breakpoints } from '../../index';

export default function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames
    .filter((breakpointName) => Boolean(cssByBreakpoints[breakpointName])
      && breakpoints[breakpointName] !== undefined)
    .map((breakpointName) => css`
        @media screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoints[breakpointName]}
        }
    `);
}
