import { kRadiusS } from "src/data/borderRadius";
import styled from "styled-components";
import Text from "./Text";

const BasicInfo = () => {
  return (
    <SBox>
      <STitle>Name</STitle>
      <Text fontSize={"14px"} color={"#6C6C7D;"}>
        Choose a channel name that represents your community, members and your
        content.
      </Text>
      <SInput />
      <STitle>Description</STitle>
      <Text fontSize={"14px"} color={"#6C6C7D;"}>
        Tell viewers more about your channel.
      </Text>
      <STextArea />
    </SBox>
  );
};

export default BasicInfo;

const SInput = styled.input`
  width: 100%;
  border: 1px solid #b3b3b3;
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
  border: 1px solid #b3b3b3;
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

const SBox = styled.div`
  width: 40rem;
  padding: 0 1.75rem 0;
`;
