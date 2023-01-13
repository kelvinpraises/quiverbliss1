import Community from "@features/common/components/Community";
import Dashboard from "@features/common/components/Dashboard";
import Projects from "@features/common/components/Projects";
import Text from "@features/common/components/Text";
import { useState } from "react";
import styled from "styled-components";

const studio = () => {
  const [view, setView] = useState("Projects");

  const showView = () => {
    switch (view) {
      case "Projects":
        return <Projects />;
        break;
      case "Dashboard":
        return <Dashboard />;
        break;
      case "Customization":
        return <Community />;
        break;

      default:
        break;
    }
  };

  const Header = () => {
    return (
      <SHeader>
        <img src="/quiverbliss.svg" alt="logo" />
        <SStudio>Studio</SStudio>
      </SHeader>
    );
  };

  const Nav = () => {
    return (
      <SNav>
        <SNavItem onClick={() => setView("Dashboard")}>Dashboard</SNavItem>
        <SNavItem onClick={() => setView("Projects")}>Projects</SNavItem>
        <SNavItem onClick={() => setView("Customization")}>
          Customization
        </SNavItem>
      </SNav>
    );
  };

  return (
    <SBox>
      <Header />
      <SFlex>
        <Nav />
        {showView()}
      </SFlex>
    </SBox>
  );
};

export default studio;

const SHeader = styled.div`
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  padding-left: 2.7rem;
  border-bottom: 1px solid #b3b3b3;
`;

const SStudio = styled(Text)`
  font-size: 1.8rem;
  padding-left: 1rem;
`;

const SFlex = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`;

const SNav = styled.div`
  max-width: 13rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8rem 0 0 2rem;
  border-right: 1px solid #b3b3b3;
  height: calc(100vh - 5.5rem);
`;

const SNavItem = styled.p`
  font-size: 1.2rem;
  user-select: none;
  color: #404040;
  margin: 2rem 0;
  cursor: pointer;
`;

const SBox = styled.div`
  /* position: fixed; */
  overflow: hidden;
  height: 100vh;
`;
