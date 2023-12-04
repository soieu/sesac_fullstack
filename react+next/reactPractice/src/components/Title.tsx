import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
  color: string;
};

export default function Title({
  title,
  color,
  children,
}: PropsWithChildren<Props>) {
  const h1Style: React.CSSProperties = {
    color: color,
  };
  return (
    <>
      <h1 style={h1Style}>{title}</h1>
      <h3>{children}</h3>
    </>
  );
}
