import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    backgrounds: {
      page: string;
      button: string;
    };
    borders: {
      button: string;
    };
    text: {
      button: string;
      buttonHover: string;
    };
  }
}
