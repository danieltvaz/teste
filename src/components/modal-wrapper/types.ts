import { ReactNode } from "react";

export type ModalWrapperProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
