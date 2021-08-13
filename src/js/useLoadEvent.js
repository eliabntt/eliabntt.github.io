/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import {expandbutton} from "./expandButton";

const isBrowser = typeof window !== `undefined`;

function getLoadEvent() {
  expandbutton();
  if (!isBrowser) return false;

  return window.location.href.substr(window.location.href.lastIndexOf('/')+1,3)==="404";
}

export function useLoadEvent(effect, deps, element, useWindow, wait) {
  const position = useRef(getLoadEvent({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const is404 = getLoadEvent();
    effect({ is404: position.current });
    position.current = is404;
    throttleTimeout = null;
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleLoad = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("scroll", handleLoad);
      throttleTimeout && clearTimeout(throttleTimeout);
    };
  }, deps);
}

useLoadEvent.defaultProps = {
  deps: [],
  is404: false,
  wait: null,
};
