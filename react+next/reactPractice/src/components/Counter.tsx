import React from "react";
type Props = { upCount: () => void; downCount: () => void };

export default function Counter({ upCount, downCount }: Props) {
  return (
    <>
      <button onClick={downCount}>-</button>
      <button onClick={upCount}>+</button>
    </>
  );
}
