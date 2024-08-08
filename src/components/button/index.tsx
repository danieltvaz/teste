import * as Styled from "./styles";

import { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"button">;

export default function Button({ children, ...props }: Props) {
  return <Styled.Button {...props}>{children}</Styled.Button>;
}
