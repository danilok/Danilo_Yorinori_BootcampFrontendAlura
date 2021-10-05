import { css } from 'styled-components';
import { breakpoints as breakpointsTheme } from '../../index';
import breakpointsMedia from '.';

describe('breakpointsMedia()', () => {
  describe('when receives no argument', () => {
    test('returns an empty array', () => {
      const argument = {};
      const breakpointsMediaResult = breakpointsMedia(argument);
      expect(breakpointsMediaResult).toEqual([]);
    });
  });
  describe('when receives an argument', () => {
    describe('with only one breakpoint', () => {
      test('returns an array with single element', () => {
        const argument = {
          xs: css`
            width: 290px;
          `,
        };
        const breakpointsMediaResult = breakpointsMedia(argument);
        expect(breakpointsMediaResult).toMatchSnapshot();
        expect(breakpointsMediaResult).toHaveLength(1);
      });
    });
    describe('with two or more breakpoints', () => {
      test('returns an array with more than one elements', () => {
        const argument = {
          xs: css`
            width: 290px;
          `,
          md: css`
            width: 288px;
          `,
        };
        const breakpointsMediaResult = breakpointsMedia(argument);
        expect(breakpointsMediaResult).toMatchSnapshot();
        expect(breakpointsMediaResult.length).toBeGreaterThan(1);
      });
    });
    describe('with all breakpoints', () => {
      test('returns an array with length equals to configured breakpoints', () => {
        const argument = {
          xs: css`
            width: 290px;
          `,
          md: css`
            width: 488px;
          `,
          sm: css`
            width: 288px;
          `,
          lg: css`
            width: 588px;
          `,
          xl: css`
            width: 788px;
          `,
        };
        const breakpointsMediaResult = breakpointsMedia(argument);
        expect(breakpointsMediaResult).toMatchSnapshot();
        expect(breakpointsMediaResult).toHaveLength(Object.keys(breakpointsTheme).length);
      });
    });
    describe('with invalid breakpoint value', () => {
      test('returns an array with only valid ones', () => {
        const argument = {
          xs: css`
            width: 290px;
          `,
          st: css`
            width: 488px;
          `,
        };
        const breakpointsMediaResult = breakpointsMedia(argument);
        expect(breakpointsMediaResult).toMatchSnapshot();
        expect(breakpointsMediaResult).toHaveLength(1);
      });
    });
  });
});
