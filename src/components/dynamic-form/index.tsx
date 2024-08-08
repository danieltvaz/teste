import * as Styled from "./styles";

import Button from "../button";
import { FormEvent } from "react";
import FormSection from "./section";
import { IFormattedForm } from "../../utils/dynamic-form";

type Props = {
  formData: IFormattedForm;
  handleSubmit: (event: FormEvent<HTMLFormElement>, formId: number) => any;
};

export default function DynamicForm({ formData, handleSubmit }: Props) {
  console.log(formData);
  return (
    <Styled.Form onSubmit={(e) => handleSubmit(e, formData.id)}>
      <Styled.Row>
        <Styled.FormTitle>{formData.title}</Styled.FormTitle>
      </Styled.Row>
      {formData.sections.map((section, index) => (
        <FormSection columns={formData.columns} section={section} key={`form-section-${section.id}-${index}`} />
      ))}
      <Styled.Row style={{ justifyContent: "center", alignItems: "flex-end", height: "100%" }}>
        <Button type="submit">Salvar</Button>
      </Styled.Row>
    </Styled.Form>
  );
}
