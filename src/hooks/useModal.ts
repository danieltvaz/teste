import { useCallback, useState } from "react";

export default function useModal(numberOfModals: number) {
  const [isModalVisible, setIsModalVisible] = useState<boolean[]>(() =>
    Array.from({ length: numberOfModals }, () => false)
  );

  const handleOpenModal = useCallback((formIndex: number) => {
    setIsModalVisible((prev) => prev.map((isVisible, index) => (index === formIndex ? true : isVisible)));
  }, []);

  const handleCloseModal = useCallback((formIndex: number) => {
    setIsModalVisible((prev) => prev.map((isVisible, index) => (index === formIndex ? false : isVisible)));
  }, []);

  return { isModalVisible, handleOpenModal, handleCloseModal };
}
