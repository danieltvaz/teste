import * as Styled from "../styles";

import { IFormattedSection } from "../../../utils/dynamic-form";

type Props = {
  subSection: IFormattedSection;
  sectionId: number;
};

export default function FormSubSection({ subSection, sectionId }: Props) {
  return (
    <Styled.Row>
      <Styled.Row>
        <Styled.FormSubSectionTitle>{subSection.title}</Styled.FormSubSectionTitle>
      </Styled.Row>
      {subSection.fields?.map((field, index) => (
        <Styled.Column colSpan={field.columnSpan} key={`subsection-field-${field.id}-${field.title}-${index}`}>
          <Styled.FieldInputLabel>{field.title}</Styled.FieldInputLabel>
          <Styled.FieldInput name={`${sectionId}.${subSection.id}.${field.id}`} placeholder={field.fieldType.name} />
        </Styled.Column>
      ))}
    </Styled.Row>
  );
}
