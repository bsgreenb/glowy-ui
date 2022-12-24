import React, { ReactNode } from "react";

type GridGapContextProps = {
  gapEm: number;
};

export const GridGapContext = React.createContext<GridGapContextProps>({
  gapEm: 0,
});

type GridGapProviderProps = {
  gapEm: GridGapContextProps["gapEm"];
  children: ReactNode;
};

const GridGapProvider = ({ gapEm, children }: GridGapProviderProps) => {
  return (
    <GridGapContext.Provider value={{ gapEm }}>
      {children}
    </GridGapContext.Provider>
  );
};

export default GridGapProvider;
