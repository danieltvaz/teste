import * as Styled from "./styles";

import { fieldTypes, fields, sections } from "../../types/livecode_form";

import { Form1Props } from "./types";
import { useState } from "react";

export default function Form1({ form }: Form1Props) {
  const [inputsData, setinputsData] = useState({});

  function getSectionDataById(sectionId: number) {
    return sections.filter((section) => section.Id === sectionId)[0];
  }

  function getFieldDataById(fieldId: number) {
    return fields.filter((field) => field.Id === fieldId)[0];
  }

  return (
    <Styled.FormWrapper>
      <Styled.FormTitle>{form.Title}</Styled.FormTitle>
      {form.SectionIds.map((sectionId) => {
        const sectionData = getSectionDataById(sectionId);

        return (
          <Styled.FormSection>
            <Styled.SectionTitle>{sectionData.Title}</Styled.SectionTitle>
            {sectionData.FieldIds?.map((fieldId) => {
              const fieldData = getFieldDataById(fieldId);

              return (
                <>
                  <Styled.Input title={fieldData.Title} />
                </>
              );
            })}
            {sectionData.SubSectionIds?.map((subSectionId) => {
              const subSectionData = getSectionDataById(subSectionId);

              return (
                <Styled.FormSection>
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
