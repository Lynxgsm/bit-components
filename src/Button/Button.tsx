import { useState } from "react";
import { ButtonProps } from "./Button.props";

export default function Button({ children }: ButtonProps) {
  const [open, setopen] = useState(false);
  const toggle = () => {
    setopen((_state) => !_state);
  };

  return <button onClick={toggle}>{open ? "open" : children}</button>;
}
