import React, { PropsWithChildren } from "react";

type Props = {
  borderWidth: string;
  borderColor: string;
  borderStyle: string;
  padding: string;
  margin: string;
};

export default function Box({
  borderWidth,
  borderColor,
  borderStyle,
  padding,
  margin,
  children,
}: PropsWithChildren<Props>) {
  const boxStyle: React.CSSProperties = {
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderStyle: borderStyle,
    padding: padding,
    margin: margin,
  };
  return (
    <>
      <div style={boxStyle}>{children}</div>
    </>
  );
}
