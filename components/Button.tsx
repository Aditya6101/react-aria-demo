import { AriaButtonProps, useButton } from "react-aria";
import { useRef } from "react";
import { motion } from "framer-motion";

interface Props extends AriaButtonProps {
  active: boolean;
}

export default function Button(props: Props) {
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);
  let { children, active } = props;

  return (
    <button
      className={`${
        active ? "" : "hover:text-white/60"
      } relative rounded-full px-3 py-1.5 text-sm font-medium text-white transition focus-visible:outline-2 `}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
      {...buttonProps}
      ref={ref}
    >
      {active && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white mix-blend-difference"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {children}
    </button>
  );
}
