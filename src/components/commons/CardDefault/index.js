import React from 'react';
import { PropTypes } from 'prop-types';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';

export default function CardDefault({ card }) {
  return (
    <>
      <CardImage
        src={card.img}
        url={card.url}
        alt={card.title}
      />
      <CardTitle
        repo={card.repo}
        slug={card.slug}
      >
        {card.title}
      </CardTitle>
    </>
  );
}

CardDefault.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
    repo: PropTypes.string,
    slug: PropTypes.string,
    highlight: PropTypes.bool,
  }).isRequired,
};
