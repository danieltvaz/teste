import * as Styled from "../styles";

import DynamicFormField from "../field";
import FormSubSection from "../sub-section";
import { IFormattedSection } from "../../../utils/dynamic-form";

type Props = {
  section: IFormattedSection;
  columns: number;
};

export default function FormSection({ section, columns }: Props) {
  return (
    <Styled.Column colSpan={columns}>
      <Styled.Row>
        <Styled.FormSectionTitle>{section.title}</Styled.FormSectionTitle>
      </Styled.Row>
      <Styled.Row>
        {section.fields?.map((field, index) => (
          <DynamicFormField sectionId={section.id} field={field} key={`section-field-${field.id}-${index}`} />
        ))}
      </Styled.Row>
      {section.subSections?.map((subSection, index) => (
        <FormSubSection
          sectionId={section.id}
          subSection={subSection}
          key={`form-subsection-${subSection.id}-${index}`}
        />
      ))}
    </Styled.Column>
  );
}
