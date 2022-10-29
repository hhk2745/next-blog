import { useState } from "react";
import TextInput from "./form/TextInput";
import UseFormProps from "./form/UseFormProps";
import Yup from "./form/Yup";

const ReactHookForm = () => {
  const renderArr = [
    { title: "default", reactNode: <></> },
    { title: "TextInput", reactNode: <TextInput /> },
    { title: "UseFormProps", reactNode: <UseFormProps /> },
    { title: "Yup", reactNode: <Yup /> },
  ];
  const [render, setRender] = useState(renderArr[0]);
  return (
    <>
      <h1>React Hook Form</h1>
      <ul className="formSamples">
        {renderArr.map((m) => (
          <li className="sampleItem" onClick={() => setRender(m)} key={m.title}>
            {m.title}
          </li>
        ))}
      </ul>
      {render.reactNode}
    </>
  );
};

export default ReactHookForm;
