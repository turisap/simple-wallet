import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    backgrounds: {
      page: string;
      button: string;
      plate: string;
    };
    borders: {
      button: string;
    };
    text: {
      button: string;
      buttonHover: string;
      plate: string;
    };
    radius: {
      plate: string;
    };
  }
}
