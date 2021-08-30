import React from 'react';
import AboutScreen from '../src/components/screens/About';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function AboutPage() {
  return (
    <AboutScreen />
  );
}

AboutPage.propTypes = AboutScreen.propTypes;

export default websitePageHOC(AboutPage);
