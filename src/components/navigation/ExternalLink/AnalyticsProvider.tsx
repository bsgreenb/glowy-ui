import React, { ReactNode } from "react";

// Provider which determines whether ExternalLinks have google analytics on them.  We only want these on apps, not on storybook.
type AnalyticsContextProps = {
  analytics: boolean;
};

export const AnalyticsContext = React.createContext<AnalyticsContextProps>({
  analytics: false,
});

type AnalyticsProviderProps = {
  children: ReactNode;
};

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  return (
    <AnalyticsContext.Provider value={{ analytics: true }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
