import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  headerLink: css`
    font-size: ${({ theme }) => theme.typographyVariants.headerLink.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.headerLink.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.headerLink.lineHeight};
  `,
  headerLinkXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.headerLinkXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.headerLinkXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.headerLinkXS.lineHeight};
  `,
  coverH1: css`
    font-size: ${({ theme }) => theme.typographyVariants.coverH1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.coverH1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.coverH1.lineHeight};
  `,
  coverH1XS: css`
    font-size: ${({ theme }) => theme.typographyVariants.coverH1XS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.coverH1XS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.coverH1XS.lineHeight};
  `,
  coverH2: css`
    font-size: ${({ theme }) => theme.typographyVariants.coverH2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.coverH2.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.coverH2.lineHeight};
  `,
  coverH2XS: css`
    font-size: ${({ theme }) => theme.typographyVariants.coverH2XS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.coverH2XS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.coverH2XS.lineHeight};
  `,
  sectionTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.sectionTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.sectionTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.sectionTitle.lineHeight};
  `,
  sectionTitleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.sectionTitleXS.lineHeight};
  `,
  title: css`
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,
  titleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  highlight: css`
    font-size: ${({ theme }) => theme.typographyVariants.highlight.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.highlight.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.highlight.lineHeight};
  `,
  highlightXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.highlightXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.highlightXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.highlightXS.lineHeight};
  `,
  subTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  ${propToStyle('textAlign')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf([
    'paragraph1',
    'paragraph2',
    'title',
    'titleXS',
    'smallestException',
    'subTitle',
    'coverH1',
    'coverH1XS',
    'coverH2',
    'coverH2XS',
    'sectionTitle',
    'sectionTitleXS',
    'headerLink',
    'headerLinkXS',
    'highlight',
    'highlightXS',
  ]),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};
