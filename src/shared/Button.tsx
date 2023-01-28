import React from 'react';
import styled from 'styled-components';
import { fontSize, theme } from '../theme/theme';

const ButtonStyle = styled.button`
  width: 172px;
  height: 29px;
  border-radius: 10px;
  background-color: ${theme.palette.primary[600]};
  color: ${theme.palette.primary[100]};
  font-family: ${theme.fontFamily.main};
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  font-size: ${fontSize(17)};
`;

const Button = ({ buttonText }: { buttonText: string }) => {
  return <ButtonStyle>{buttonText}</ButtonStyle>;
};

export default Button;
