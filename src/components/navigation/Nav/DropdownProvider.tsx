import React, { ReactNode } from "react";

type DropdownContextProps = {
  isOpen: boolean;
};

export const DropdownContext = React.createContext<DropdownContextProps>({
  isOpen: false,
});

type DropdownProviderProps = {
  isOpen?: boolean;
  children: ReactNode;
};

const DropdownProvider = ({
  isOpen = false,
  children,
}: DropdownProviderProps) => {
  return (
    <DropdownContext.Provider value={{ isOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
