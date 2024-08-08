import { IFormattedForm, factorResponseData, formDataFactory } from "./utils/dynamic-form";
import React, { FormEvent, useMemo } from "react";

import Button from "./components/button";
import DynamicForm from "./components/dynamic-form";
import ModalWrapper from "./components/modal-wrapper";
import useModal from "./hooks/useModal";

function App() {
  const formsData = useMemo(() => formDataFactory(), []);
  const { isModalVisible, handleOpenModal, handleCloseModal } = useModal(formsData.length);

  function handleSubmit(e: FormEvent<HTMLFormElement>, formData: IFormattedForm) {
    e.preventDefault();

    const formDataInstance = new FormData(e.currentTarget);

    const values: { [key: string]: FormDataEntryValue } = {};

    formDataInstance.forEach((value, key) => {
      values[key] = value;
    });

    console.log(factorResponseData(formData, values as any));
  }

  return (
    <>
      {formsData.map((form, formIndex) => (
        <React.Fragment key={`form-${formIndex}`}>
          <Button type="button" onClick={() => handleOpenModal(formIndex)}>
            Form {form.id}
          </Button>
          <ModalWrapper isOpen={isModalVisible[formIndex]} setIsModalOpen={() => handleCloseModal(formIndex)}>
            <DynamicForm formData={form} handleSubmit={(e) => handleSubmit(e, form)} />
          </ModalWrapper>
        </React.Fragment>
      ))}
    </>
  );
}

export default App;
