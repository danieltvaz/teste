import { fieldTypes, fields, forms, sections } from "./types/livecode_form";

import Form1 from "./components/form-1";

function App() {
  return (
    <>
      {forms.map((form, index) => (
        <Form1 key={`form-${index}`} form={form} />
      ))}
    </>
  );
}

export default App;
