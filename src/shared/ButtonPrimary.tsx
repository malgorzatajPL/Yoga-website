import React from 'react';
import styled from 'styled-components';
import { fontSize, theme } from '../theme/theme';

const ButtonPrimaryStyle = styled.button<{ primary?: boolean }>`
  width: 322px;
  height: 65px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  font-size: ${fontSize(25)};
  text-transform: uppercase;
  z-index: 1;
  color: ${(props) =>
    props.primary ? theme.palette.primary[500] : theme.palette.primary[100]};
  background-color: ${(props) =>
    props.primary ? theme.palette.primary[100] : theme.palette.primary[500]};
`;

export const ButtonPrimary = ({
  primary,
  textButton,
}: {
  primary: boolean;
  textButton: string;
}) => {
  return (
    <ButtonPrimaryStyle primary={primary}>{textButton}</ButtonPrimaryStyle>
  );
};
