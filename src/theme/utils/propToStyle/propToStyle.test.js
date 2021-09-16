import propToStyle from '.';

describe('propToStyle()', () => {
  describe('when receives no argument', () => {
    test('returns empty string', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text />
      const componentProps = { };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual('');
    });
  });

  describe('when receives an simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text align="center" />
      const componentProps = { textAlign: 'center' };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ textAlign: 'center' });
    });
    test('and it is a number', () => {
      const propToStyleResult = propToStyle('flex');
      // <Text flex={1} />
      const componentProps = { flex: 1 };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when receives an argument with breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text align="{ xs: 'center', }" />
      const componentProps = { textAlign: { xs: 'center' } };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
    test('renders two or more breakpoints resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text align="{ xs: 'center', md: 'right' }" />
      const componentProps = { textAlign: { xs: 'center', md: 'right' } };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
    test('renders all breakpoints resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text align="{ xs: 'center', md: 'right' }" />
      const componentProps = { textAlign: { xs: 'center', md: 'right', sm: 'center', lg: 'right', xl: 'left' } };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
  });

  describe('when receives arguments', () => {
    describe('but none for tested property', () => {
      test('renders an empty string', () => {
        const propToStyleResult = propToStyle('textAlign');
        // <Text width="50px" padding="10px" />
        const componentProps = { width: '50px', padding: '10px' };
        const styleResult = propToStyleResult(componentProps);
        expect(styleResult).toEqual('');
      });
    });
  });
});
