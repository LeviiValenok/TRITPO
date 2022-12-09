import React from 'react';
import styled from 'styled-components';

import colors from '../../style/colors';
import media from '../../style/mediaQueries';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  stretch?: boolean;
}

const Button = styled.button<ButtonProps>`
  word-spacing: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
  align-self: ${(props) => (props.stretch ? 'stretch' : 'center')};

  font-family: 'Genuine', sans-serif;
  font-size: 20px;
  line-height: 80%;
  text-align: center;

  border: none;
  border-radius: 6px;

  padding: 13px 24px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.2s linear;

  margin: 0;

  @media ${media.mqMobile} {
    font-size: 18px;
    line-height: 14px;

    padding: 14px;

    column-gap: 4px;
    :hover {
      transform: scale(1) !important;
    }
  }
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${colors.white};
  :hover {
    transform: scale(1.1);
  }
`;


export const PrimaryButton = styled(Button)`
  background: ${colors.yellow};
  color: ${colors.green};
  :hover {
    transform: scale(1.1);
  }
`;

export const PrimaryModalButton = styled(Button)`
  background: ${(props) => (props.disabled ? colors.yellow : colors.green)};
  color: ${colors.white};
`;
