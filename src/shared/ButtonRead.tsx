import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';

const ButtonReadStyle = styled.button<{ primary?: boolean }>`
  width: 322px;
  height: 65px;
  border-radius: 4px;
  border: none;
  color: ${(props) =>
    props.primary ? theme.palette.primary[500] : theme.palette.primary[100]};
  background-color: ${(props) =>
    props.primary ? theme.palette.primary[500] : theme.palette.primary[100]};
`;

export const ButtonRead = () => {
  return <ButtonReadStyle>Read more</ButtonReadStyle>;
};
