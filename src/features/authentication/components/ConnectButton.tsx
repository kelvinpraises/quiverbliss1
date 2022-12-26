import styled from "styled-components";
import { kRadiusS } from "../../../common/constants/borderRadius";

const ConnectButton = () => {
  return <SButton>Connect Wallet</SButton>;
};

export default ConnectButton;

const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: ${kRadiusS};
  color: ${({ theme }) => theme.text2};
  width: 12.5rem;
  height: 3.75rem;
  background-color: ${({ theme }) => theme.accent1};
`;
