import styled from "styled-components";

export const Form = styled.form<{ columns?: number }>`
  width: 600px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  flex-basis: ${(props) => props.columns};
`;

export const FormTitle = styled.h2`
  color: white;
`;

export const FormSectionTitle = styled.h3`
  color: white;
`;

export const FormSubSectionTitle = styled.h4`
  color: white;
`;

export const FieldInput = styled.input`
  border-radius: 4px;
  border: none;
  padding: 4px;

  &:focus {
    outline: 4px ridge rgba(170, 50, 220, 0.6);
  }
`;

export const FieldInputLabel = styled.span`
  color: white;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Column = styled.div<{ colSpan?: number; formColumns?: number }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &:last-child {
    flex-grow: 0;
  }
`;
