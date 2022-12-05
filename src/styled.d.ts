import "styled-components";

type Tokens = "page" | "button" | "plate" | "input" | "disabled";

type StyleSet = {
  [T in Tokens]?: string;
};

type TextSet = StyleSet & {
  buttonHover: string;
  error: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    backgrounds: StyleSet;
    borders: StyleSet;
    text: TextSet;
    radius: StyleSet;
  }
}
