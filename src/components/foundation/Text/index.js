import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const TextStyleVariantsMap = {
  coverH1: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.coverH1XS.fontSize};
      font-weight: ${theme.typographyVariants.coverH1XS.fontWeight};
      line-height: ${theme.typographyVariants.coverH1XS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.coverH1.fontSize};
          font-weight: ${theme.typographyVariants.coverH1.fontWeight};
          line-height: ${theme.typographyVariants.coverH1.lineHeight};
        `}
      `,
  })}
  `,
  coverH2: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.coverH2.fontSize};
      font-weight: ${theme.typographyVariants.coverH2.fontWeight};
      line-height: ${theme.typographyVariants.coverH2.lineHeight};
    `}
  `,
  sectionTitle: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.sectionTitleXS.fontSize};
      font-weight: ${theme.typographyVariants.sectionTitleXS.fontWeight};
      line-height: ${theme.typographyVariants.sectionTitleXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.sectionTitle.fontSize};
          font-weight: ${theme.typographyVariants.sectionTitle.fontWeight};
          line-height: ${theme.typographyVariants.sectionTitle.lineHeight};
        `}
      `,
  })}
  `,
  headerLink: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.headerLinkXS.fontSize};
      font-weight: ${theme.typographyVariants.headerLinkXS.fontWeight};
      line-height: ${theme.typographyVariants.headerLinkXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.headerLink.fontSize};
          font-weight: ${theme.typographyVariants.headerLink.fontWeight};
          line-height: ${theme.typographyVariants.headerLink.lineHeight};
        `}
      `,
  })}
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
  })}
  `,
  contact: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.contactXS.fontSize};
      font-weight: ${theme.typographyVariants.contactXS.fontWeight};
      line-height: ${theme.typographyVariants.contactXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.contact.fontSize};
          font-weight: ${theme.typographyVariants.contact.fontWeight};
          line-height: ${theme.typographyVariants.contact.lineHeight};
        `}
      `,
  })}
  `,
  label: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.labelXS.fontSize};
      font-weight: ${theme.typographyVariants.labelXS.fontWeight};
      line-height: ${theme.typographyVariants.labelXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.label.fontSize};
          font-weight: ${theme.typographyVariants.label.fontWeight};
          line-height: ${theme.typographyVariants.label.lineHeight};
        `}
      `,
  })}
  `,
  highlight: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.highlightXS.fontSize};
      font-weight: ${theme.typographyVariants.highlightXS.fontWeight};
      line-height: ${theme.typographyVariants.highlightXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.highlight.fontSize};
          font-weight: ${theme.typographyVariants.highlight.fontWeight};
          line-height: ${theme.typographyVariants.highlight.lineHeight};
        `}
      `,
  })}
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
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginTop')}
  ${propToStyle('margin')}
  ${propToStyle('textTransform')}
  ${propToStyle('fontWeight')}
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
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'p',
    'li',
    'a',
    'span',
    'input',
    'label',
    'textarea',
  ]),
  variant: PropTypes.oneOf([
    'paragraph1',
    'paragraph2',
    'title',
    'smallestException',
    'subTitle',
    'coverH1',
    'coverH2',
    'sectionTitle',
    'headerLink',
    'highlight',
    'contact',
    'label',
  ]),
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};
