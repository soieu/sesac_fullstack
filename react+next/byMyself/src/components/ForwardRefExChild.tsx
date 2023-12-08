import { LegacyRef, forwardRef } from "react";

function ForwardRefExChild(_, ref: LegacyRef<HTMLInputElement> | undefined) {
  return (
    <>
      <input type="text" ref={ref} placeholder="search word..." />
      <button>search</button>
    </>
  );
}

export default forwardRef(ForwardRefExChild);
