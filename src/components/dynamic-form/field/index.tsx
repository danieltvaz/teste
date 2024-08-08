import * as Styled from "../styles";

import { IFormattedField } from "../../../utils/dynamic-form";

type Props = {
  field: IFormattedField;
  sectionId: number;
};

export default function DynamicFormField({ field, sectionId }: Props) {
  return (
    <Styled.Column colSpan={field.columnSpan} key={`section-field-${field.id}`}>
      <Styled.FieldInputLabel>{field.title}</Styled.FieldInputLabel>
      <Styled.FieldInput name={`${sectionId}.${field.id}`} placeholder={field.fieldType.name} />
    </Styled.Column>
  );
}
