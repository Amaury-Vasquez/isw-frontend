import { useState } from "react";

interface IToggleAnimated {
  animate: true;
  timeout?: number;
}

interface IToggleUnanimated {
  animate: false;
}

export type IToggleOptions = IToggleAnimated | IToggleUnanimated;

export default function useToggle(
  initialValue: boolean,
  options: IToggleOptions = { animate: true, timeout: 250 }
) {
  const [isActive, setIsActive] = useState(initialValue);
  const [willAnimate, setWillAnimate] = useState(false);
  const { animate } = options;
  const timeout = options.animate ? options.timeout : 0;

  const activate = () => setIsActive(true);
  const deactivate = () => setIsActive(false);

  const toggle = () => {
    if (animate) {
      if (isActive) {
        setWillAnimate(true);
        setTimeout(() => {
          setWillAnimate(false);
          deactivate();
        }, timeout);
      } else activate();
    } else setIsActive(!isActive);
  };

  return { isActive, toggle, activate, deactivate, willAnimate };
}
