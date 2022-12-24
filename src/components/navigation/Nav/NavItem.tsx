import React, { useState, ReactNode } from "react";
import GridItem from "../../layout/Grid/GridItem";
import DropdownProvider from "./DropdownProvider";

type NavItemProps = { dropdown?: boolean; children: ReactNode };

// Later Design QSTN: We don't currently fit either of those.  Should we have caret indicator for children, which could handle the keydown?
// get a simple y/n from jackson, cus if visually its preferable I could just do keyboard controls in next run.. but if we visually do want it that way then I should set it up now.
// In any event, let's chill on bugging him for a bit, I can build sidebar and leave this open, with tab simply working.
// Future: extract repeats here.
// https://www.w3.org/WAI/tutorials/menus/flyout/#keyboard-users
// Idea: It could happen on hover.
const HOVER_DELAY = 500;
const UNHOVER_DELAY = 1000;

const NavItem = ({ dropdown = false, children }: NavItemProps) => {
  const [delayHandler, setDelayHandler] = useState<
    ReturnType<typeof setTimeout>
  >();

  const [isOpen, setIsOpen] = useState(false);

  if (!dropdown) {
    return <GridItem>{children}</GridItem>;
  }

  // Future: this debouncing could be made generic.
  const delayedOnEnter = () => {
    if (setIsOpen) {
      if (delayHandler) {
        clearTimeout(delayHandler);
      }
      setDelayHandler(
        setTimeout(() => {
          setIsOpen(true);
        }, HOVER_DELAY)
      );
    }
  };

  const delayedOnLeave = () => {
    if (setIsOpen) {
      if (delayHandler) {
        clearTimeout(delayHandler);
      }
      setDelayHandler(
        setTimeout(() => {
          setIsOpen(false);
        }, UNHOVER_DELAY)
      );
    }
  };

  // TODO: provide a toggleOpen function?
  return (
    <DropdownProvider isOpen={isOpen}>
      <GridItem onEnter={delayedOnEnter} onLeave={delayedOnLeave}>
        {children}
      </GridItem>
    </DropdownProvider>
  );
};

export default NavItem;
