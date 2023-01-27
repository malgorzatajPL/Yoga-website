import 'styled-components';

declare module 'styled-components' {
  interface IShades {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
  }
  export interface ThemeTypes {
    palette: {
      primary: IShades;
      grey: string;
    };
    fontFamily: {
      main: string;
    };
  }
}
