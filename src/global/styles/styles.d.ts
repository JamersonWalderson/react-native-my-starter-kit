import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {
    colors: {
      primary: string;
      secondary: string;
      third: string;
      light: string;
      success: string;
      error: string;
      alert: string;
      attention: string;
      backgroundLight: string;
    },
    size: {
      title: string;
      subTitle: string;
      helperError: string;
    },
  }
}
