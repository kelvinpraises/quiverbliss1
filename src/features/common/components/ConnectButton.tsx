import { Else, If, Then } from "react-if";
import styled from "styled-components";
import { kRadiusS } from "../../../data/borderRadius";

const ConnectButton = () => {
  return (
    <>
      <If condition={false}>
        <Then>
          <SButton>Connect Wallet</SButton>
        </Then>
        <Else>
          <SButton>Disconnect</SButton>
        </Else>
      </If>
    </>
  );
};

export default ConnectButton;

const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: ${kRadiusS};
  color: ${({ theme }) => theme.text2};
  height: 2rem;
  background-color: ${({ theme }) => theme.accent1};
  font-weight: 600;
  font-family: "inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 1rem;
  text-align: center;
  transition: all 200ms ease;
  padding: 10px 16px;
  user-select: none;
  margin: 1rem;
  width: 12ch;

  :hover {
    background-color: ${({ theme }) => theme.accent2};
  }

  :active {
    background-color: ${({ theme }) => theme.accent3};
  }
`;
