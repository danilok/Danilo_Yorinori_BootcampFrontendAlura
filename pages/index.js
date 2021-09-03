import React from 'react';
import HomeScreen from '../src/components/screens/Home';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomePage() {
  return (
    <HomeScreen />
  );
}

HomePage.propTypes = HomeScreen.propTypes;

export default websitePageHOC(HomePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    coverProps: {
      display: true,
    },
  },
});
