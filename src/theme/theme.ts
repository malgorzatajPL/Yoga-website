import { ThemeTypes } from 'styled-components';

export const theme: ThemeTypes = {
  palette: {
    primary: {
      100: '#f2f9f4',
      200: '#deede7',
      300: '#c0dad5',
      400: '#6c9894',
      500: '#4F9A94',
    },
    grey: '#444444',
  },
  fontFamily: {
    main: 'Montserrat , sans-serif',
  },
};

const fontSizeBase = 16;
export const fontSize = (sizeInPx: number) =>
  `${(sizeInPx / fontSizeBase).toFixed(2)}rem`;
