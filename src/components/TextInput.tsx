import { kRadiusS } from "@data/borderRadius";
import { ChangeEvent } from "react";
import styled from "styled-components";

export const TextInput = ({
  type = "input",
  onChange,
  value,
  heading,
  subheading,
}: {
  type?: "input" | "textArea";
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  heading: string;
  subheading: string;
}) => {
  return (
    <SInputBox>
      <SHeading>{heading}</SHeading>
      <SSubHeading>{subheading}</SSubHeading>
      {type === "input" ? (
        <SInput onChange={onChange} value={value} />
      ) : (
        <STextArea onChange={onChange} value={value} />
      )}
    </SInputBox>
  );
};

const SHeading = styled.p`
  font-size: 1.2rem;
`;
const SInputBox = styled.div`
  padding: 0 2rem 2rem;
`;

const SSubHeading = styled.p<{ fontSize?: string }>`
  font-size: 1rem;
  color: #6c6c7d;
  margin-bottom: 0.5rem;
`;

const SInput = styled.input`
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: ${kRadiusS};
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
  font-size: 16px;
  padding: 0.8rem 1rem;
  background-color: transparent;
  resize: none;
  outline: none;
`;
