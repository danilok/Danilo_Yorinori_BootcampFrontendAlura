import React from 'react';
import ContactScreen from '../src/components/screens/Contact';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function ContactPage() {
  return (
    <ContactScreen />
  );
}

export default websitePageHOC(ContactPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Contato',
    },
  },
});
