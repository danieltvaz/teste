import * as Styled from "./styles";

import { ModalWrapperProps } from "./types";

export default function ModalWrapper({ children, isOpen }: ModalWrapperProps) {
  if (isOpen) {
    return (
      <>
        <Styled.InnerWrapper>{children}</Styled.InnerWrapper>
      </>
    );
  }

  return;
}
