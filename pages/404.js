import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import NotFoundScreen from '../src/components/screens/NotFound';

function NotFoundPage() {
  return (
    <NotFoundScreen />
  );
}

export default websitePageHOC(NotFoundPage, {
  pageWrapperProps: {
    coverProps: {
      display: false,
    },
  },
});
