import { useEffect, useRef } from "react";
import ForwardRefExChild from "./ForwardRefExChild";

export type HandleProp = { fn: () => void };

export default function ForwardRefExParent() {
  const idRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    idRef.current?.focus();
  }, []);

  return (
    <>
      <h1>search</h1>
      <ForwardRefExChild ref={idRef}></ForwardRefExChild>
    </>
  );
}
