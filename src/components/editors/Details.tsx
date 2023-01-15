import styled from "styled-components";

import { TextInput } from "@components/TextInput";

const DetailsEditor = () => {
  return (
    <SDetailsEditor>
      <TextInput
        value=""
        onChange={() => {}}
        heading={"Name"}
        subheading={"Give a suitable title for your project."}
      />
      <TextInput
        value=""
        type="textArea"
        onChange={() => {}}
        heading={"Description"}
        subheading={"Tell viewers about your project."}
      />
    </SDetailsEditor>
  );
};

export default DetailsEditor;

const SDetailsEditor = styled.div`
  max-width: 40rem;
`;
