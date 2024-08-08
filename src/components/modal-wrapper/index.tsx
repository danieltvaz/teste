import * as Styled from "./styles";

import { ModalWrapperProps } from "./types";
import ReactDOM from "react-dom";

export default function ModalWrapper({ children, isOpen, setIsModalOpen }: ModalWrapperProps) {
  if (isOpen) {
    return ReactDOM.createPortal(
      <Styled.OuterWrapper onClick={() => setIsModalOpen((prev) => !prev)}>
        <Styled.InnerWrapper onClick={(e) => e.stopPropagation()}>{children}</Styled.InnerWrapper>
      </Styled.OuterWrapper>,
      document.body
    );
  }

  return;
}
