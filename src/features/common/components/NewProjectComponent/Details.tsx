import { kRadiusS } from "src/data/borderRadius";
import styled from "styled-components";
import Text from "../Text";

const Details = () => {
  return (
    <div style={{ maxWidth: "40rem", padding: "0 1.5rem" }}>
      <STitle>Name</STitle>
      <Text fontSize={"14px"} color={"#6C6C7D;"}>
        Give a suitable title for your project.
      </Text>
      <SInput />
      <STitle>Description</STitle>
      <Text fontSize={"14px"} color={"#6C6C7D;"}>
        Tell viewers about your project.
      </Text>
      <STextArea />
    </div>
  );
};

export default Details;

const SInput = styled.input`
  width: 100%;
  border: 1px solid #6c6c7d;
  border-radius: ${kRadiusS};
  margin-top: 8px;
  font-size: 16px;
  padding: 0.8rem 1rem;
  background-color: transparent;
  resize: none;
  outline: none;
`;

const STextArea = styled.textarea`
  width: 100%;
  height: 8rem;
  border: 1px solid #6c6c7d;
  border-radius: ${kRadiusS};
  margin-top: 8px;
  font-size: 16px;
  padding: 0.8rem 1rem;
  background-color: transparent;
  resize: none;
  outline: none;
`;

const STitle = styled(Text)`
  margin-top: 2rem;
  font-size: 1.2rem;
`;
