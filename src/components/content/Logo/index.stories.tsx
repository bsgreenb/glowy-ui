import React from "react";
import Logo from ".";
import BackgroundProvider from "../../layout/BackgroundProvider";

export default {
  component: Logo,
  title: "Content/Logo",
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <BackgroundProvider bgColor="dark">{storyFn()}</BackgroundProvider>
    ),
  ],
};

export const LongLogo = () => (
  <Logo
    logoUrl="http://images.ctfassets.net/recq25x3mcro/6CX9UqG1DV3LJTcqmLGKGQ/12c7d7de5bf63764c7dfd1b2ae7360f1/logo.svg"
    desktopWidthPx={151}
    mobileWidthPx={114}
  />
);

export const SquareLogo = () => (
  <Logo
    logoUrl="http://images.ctfassets.net/recq25x3mcro/3x2go04lV2KeTS5JxY27fb/2741c973aeb91e9870ad2e274395b9f6/square-logo.svg"
    desktopWidthPx={70}
    mobileWidthPx={70}
  />
);
