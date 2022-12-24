import styled from "styled-components";

type TextSymbolProps = {
  char: string;
};
const TextSymbol = styled.span<TextSymbolProps>`
  text-decoration: inherit;
  text-decoration-line: inherit;
  text-decoration-color: inherit;

  &::before {
    display: inline-block;
    content: "${({ char }) => char}";
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: inherit;
    text-decoration-line: inherit;
    text-decoration-color: inherit;
  }
`;

export default TextSymbol;
