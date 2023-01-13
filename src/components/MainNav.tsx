import styled from "styled-components";

import ConnectButton from "@components/ConnectButton";
import Logo from "@components/Logo";
import { kMaxContentWidthL } from "@data/width";

const MainNav: React.FC = () => (
  <SMainNav>
    <SContent>
      <Logo type="explorer" />
      <ConnectButton />
    </SContent>
  </SMainNav>
);

export default MainNav;

const SMainNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
`;

const SContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: ${kMaxContentWidthL};
  height: 5rem;
`;
