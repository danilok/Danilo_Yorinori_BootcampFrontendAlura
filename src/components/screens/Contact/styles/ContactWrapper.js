import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const ContactWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: scroll;
  ${breakpointsMedia({
    xs: css`
      padding-bottom: 130px;
    `,
  })}
`;

ContactWrapper.ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  p {
    margin-bottom: 20px;
  }
`;

ContactWrapper.Button = styled.a`
  border: 1px solid rgba(0,0,0,0.2);
  border-bottom-color: rgba(0,0,0,0.4);
  box-shadow: inset 0 0.0625em 0 rgba(255,255,255,0.4), inset 0 0 0.0625em rgba(255,255,255,0.6);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 25.6px;
  letter-spacing: 0;
  padding: 0;
  position: relative;
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(0,0,0,0.5);
  display: inline-block;
  user-select: none;
  margin: 8px 4px;
  font-size: 16px;
  width: 300px;

  & > span:before {
    border-right: 0.075em solid rgba(0,0,0,0.1);
    box-shadow: 0.075em 0 0 rgba(255,255,255,0.25);
    content: "";
    display: block;
    float: left;
    font-size: 20px;
    min-height: 1em;
    margin: 0.1em 0.5em 0 0;
    padding: 0 0.5em;
    padding-right: 15px;
    background: ${({ iconUrl }) => css`
      url('${iconUrl}') no-repeat;
    `};
  }

  & > span {
    display: block;
    font-weight: bold;
    padding: 10px;
    white-space: nowrap;
    position: relative;
    z-index: 100;
  }

  &,
  & > span {
    border-radius: 0.2em;
    position: relative;
    z-index: 100;
  }

  &:active {
    outline: none; /* outline is visible on :focus */
  }

  &:hover {
    opacity: .5;
  }

  &.linkedin {
    background: #0A66C2;
  }

  &.github {
    background: #000;
  }
`;

ContactWrapper.FormWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;

  ${breakpointsMedia({
    xs: css`
        padding-top: 0;
      `,
    md: css`
        width: 50%;
        padding-top: 50px;
      `,
  })}
`;

export default ContactWrapper;
