import React, { ReactNode } from "react";
import styled from "styled-components";
import { backgroundColor, BackgroundColorProp } from "../../../styles/color";
import { fontColor } from "../../../styles/typography";

type BackgroundContextProps = {
  bgColor: BackgroundColorProp;
};

export const BackgroundContext = React.createContext<BackgroundContextProps>({
  bgColor: "light",
});

type BackgroundProviderProps = {
  bgColor?: BackgroundColorProp;
  children: ReactNode;
};

const Background = styled.div`
  background-color: ${({ bgColor }: BackgroundContextProps) =>
    backgroundColor[bgColor]};
  color: ${({ bgColor }) => fontColor[bgColor].primary};
  display: block;
  padding: 0;
`;

// TODO: we should have the option of settting the div or not.  Then we could stop using BackgroundContext.Provider directly.
const BackgroundProvider = ({ bgColor, children }: BackgroundProviderProps) => {
  if (!bgColor) {
    return <>{children}</>;
  }

  return (
    <BackgroundContext.Provider value={{ bgColor }}>
      <Background bgColor={bgColor}>{children}</Background>
    </BackgroundContext.Provider>
  );
};
export default BackgroundProvider;
