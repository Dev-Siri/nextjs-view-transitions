import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  name: string;
}

export default function Animated({ children, name }: Props) {
  return <div style={{ viewTransitionName: name }}>{children}</div>;
}
