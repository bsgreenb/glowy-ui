import {
  ReactNode,
  useState,
  useLayoutEffect,
  useEffect,
  ReactPortal,
} from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  children: ReactNode;
};

const useEnhancedEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Portal = ({ children }: PortalProps): ReactPortal | null => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEnhancedEffect(() => {
    setContainer(document.body);
  }, [container]);

  if (container) {
    return ReactDOM.createPortal(children, container, "Portal");
  } else {
    return container;
  }
};

export default Portal;
