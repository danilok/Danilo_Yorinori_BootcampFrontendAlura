import breakpointsMedia from '../breakpointsMedia';
import { breakpoints as breakpointsTheme } from '../..';

export default function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints = {};

      Object.keys(breakpointsTheme).forEach((breakpoint) => {
        if (propValue[breakpoint]) breakpoints[breakpoint] = { [propName]: propValue[breakpoint] };
      });

      return breakpointsMedia(breakpoints);
    }

    return '';
  };
}
