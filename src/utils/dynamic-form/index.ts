import { TColumns, TNativeType } from "../../storage/form-data/types";
import { fieldTypes, fields, forms, sections } from "../../storage/form-data/index";

export interface IFormattedFieldType {
  id: number;
  name: string;
  nativeType: TNativeType;
}

export interface IFormattedField {
  id: number;
  required: boolean;
  title: string;
  propertyName: string;
  columnSpan: TColumns;
  fieldType: IFormattedFieldType;
  value?: TNativeType;
}

export interface IFormattedSection {
  id: number;
  title: string;
  fields?: IFormattedField[];
  subSections?: IFormattedSection[];
}

export interface IFormattedForm {
  id: number;
  title: string;
  columns: number;
  sections: IFormattedSection[];
}

const fieldTypeMap = new Map(fieldTypes.map((ft) => [ft.Id, { id: ft.Id, name: ft.Name, nativeType: ft.NativeType }]));

function getFieldTypeById(idToGet: number): IFormattedFieldType {
  return fieldTypeMap.get(idToGet)!;
}

function getFieldsById(idsToGet: number[]): IFormattedField[] {
  return idsToGet.reduce<IFormattedField[]>((acc, id) => {
    const field = fields.find((field) => field.Id === id);

    if (field) {
      acc.push({
        id: field.Id,
        required: field.Required,
        title: field.Title,
        propertyName: field.PropertyName,
        columnSpan: field.ColumnSpan,
        fieldType: getFieldTypeById(field.FieldTypeId),
      });
    }

    return acc;
  }, []);
}

function getSectionsById(idsToGet: number[]): IFormattedSection[] {
  return idsToGet.reduce<IFormattedSection[]>((acc, id) => {
    const section = sections.find((section) => section.Id === id);

    if (section) {
      const subSections = section.SubSectionIds ? getSectionsById(section.SubSectionIds) : undefined;
      const fields = section.FieldIds ? getFieldsById(section.FieldIds) : undefined;

      acc.push({
        id: section.Id,
        title: section.Title,
        subSections: subSections,
        fields: fields,
      });
    }
    return acc;
  }, []);
}

export function formDataFactory(): IFormattedForm[] {
  return forms.map((form) => ({
    id: form.Id,
    title: form.Title,
    columns: form.Columns,
    sections: getSectionsById(form.SectionIds),
  }));
}

export function factorResponseData(factoredFormData: IFormattedForm, data: { [key: string]: TNativeType }) {
  const generateKey = (sectionId: number, fieldId: number, subSectionId?: number) => {
    if (subSectionId) {
      return `${sectionId}.${subSectionId}.${fieldId}`;
    }
    return `${sectionId}.${fieldId}`;
  };

  factoredFormData.sections.forEach((section) => {
    if (section.fields) {
      section.fields.forEach((field) => {
        const key = generateKey(section.id, field.id);
        field.value = data[key] ?? null;
      });
    }

    if (section.subSections) {
      section.subSections.forEach((subSection) => {
        if (subSection.fields) {
          subSection.fields.forEach((field) => {
            const key = generateKey(section.id, field.id, subSection.id);
            field.value = data[key] ?? null;
          });
        }
      });
    }
  });

  return factoredFormData;
}
