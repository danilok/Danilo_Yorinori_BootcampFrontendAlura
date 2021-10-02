import React from 'react';
import AboutScreen, { getContent } from '../src/components/screens/About';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function AboutPage({ repos, about }) {
  return (
    <AboutScreen
      repos={repos}
      about={about}
    />
  );
}

AboutPage.propTypes = AboutScreen.propTypes;

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre Mim',
    },
  },
});

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/danilok/repos?per_page=10&page=1');
  const jsonRes = await res.json();
  const repos = jsonRes.map((repo) => ({
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
  }));

  const about = await getContent();

  return {
    props: {
      repos,
      about,
    },
  };
}
