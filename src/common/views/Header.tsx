import styled from "styled-components";
import ConnectButton from "../components/ConnectButton";
import Logo from "../components/Logo";
import { kMaxContentWidthL } from "../../constants/width";

const Header: React.FC = () => (
  <SHeader>
    <SContainer>
      <Logo type="header" />
      <ConnectButton />
    </SContainer>
  </SHeader>
);

export default Header;

const SHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: ${kMaxContentWidthL};
  height: 5rem;
`;
