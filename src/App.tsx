import { fieldTypes, fields, forms, sections } from "./types/livecode_form";

import Form from "./components/form";

function App() {
  return (
    <>
      {forms.map((form, index) => (
        <Form key={`form-${index}`} form={form} />
      ))}
    </>
  );
}

export default App;
