const isServer = typeof window === 'undefined';
const isStagingEnv = isServer
  ? process.env.NODE_ENV === 'development'
  : globalThis.location.href.includes('localhost');

export default isStagingEnv;
