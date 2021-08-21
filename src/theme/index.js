import typographyVariants from './typographyVariants';

const colors = {
  cover: {
    main: {
      color: '#FFF8E6',
    },
  },
  background: {
    light: {
      color: '#48a999',
    },
    dark: {
      color: '#004c40',
    },
    main: {
      color: '#e8f5e9',
    },
    section: {
      color: '#c8e6c9',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#00796b',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#033E38B0',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  danger: {
    main: {
      color: '#dc1515',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const zIndex = {
  modal: 200,
  footer: 100,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  zIndex,
  borderRadius: '8px',
  fontFamily: '\'Fira Sans Condensed\', sans-serif',
  transition: '200ms ease-in-out',
};
