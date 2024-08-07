import * as Styled from "./styles";

import { fields, sections } from "../../types/livecode_form";

import { Form1Props } from "./types";
import React from "react";

export default function Form1({ form }: Form1Props) {
  function getSectionDataById(sectionId: number) {
    return sections.filter((section) => section.Id === sectionId)[0];
  }

  function getFieldDataById(fieldId: number) {
    return fields.filter((field) => field.Id === fieldId)[0];
  }

  return (
    <Styled.FormWrapper>
      <Styled.FormTitle>{form.Title}</Styled.FormTitle>
      {form.SectionIds.map((sectionId, index) => {
        const sectionData = getSectionDataById(sectionId);

        return (
          <Styled.FormSection key={`section-${sectionId}-${index}`}>
            <Styled.SectionTitle>{sectionData.Title}</Styled.SectionTitle>
            {sectionData.FieldIds?.map((fieldId, index) => {
              const fieldData = getFieldDataById(fieldId);

              return (
                <React.Fragment key={`field-${fieldId}-${index}`}>
                  <Styled.Input title={fieldData.Title} />
                </React.Fragment>
              );
            })}
            {sectionData.SubSectionIds?.map((subSectionId, index) => {
              const subSectionData = getSectionDataById(subSectionId);

              return (
                <Styled.FormSection key={`subsection-${subSectionId}-${index}`}>
                  <Styled.SubsectionTitle>{subSectionData.Title}</Styled.SubsectionTitle>
                </Styled.FormSection>
              );
            })}
          </Styled.FormSection>
        );
      })}
    </Styled.FormWrapper>
  );
}
