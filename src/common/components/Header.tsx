import styled from "styled-components";
import ConnectButton from "../../features/authentication/components/ConnectButton";
import { kMaxContainerWidth } from "../constants/width";

const Header: React.FC = () => {
  return (
    <SHeader>
      <ConnectButton />
    </SHeader>
  );
};

export default Header;

const SHeader = styled.header`
  justify-content: flex-end;
  display: flex;
  width: 100%;
  max-width: ${kMaxContainerWidth};
`;
