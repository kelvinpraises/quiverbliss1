import { useState } from "react";
import styled from "styled-components";
import BasicInfo from "./BasicInfo";
import Branding from "./Branding";
import Members from "./Members";
import Text from "./Text";

const Community = () => {
  const [view, setView] = useState("BasicInfo");

  const showView = () => {
    switch (view) {
      case "BasicInfo":
        return <BasicInfo />;
        break;
      case "Branding":
        return <Branding />;
        break;
      case "Members":
        return <Members />;
        break;

      default:
        break;
    }
  };

  return (
    <SCommunity>
      <SCommunityNav>
        <Text type="h5">Community Customization</Text>
        <SNavBox>
          <SNavItem onClick={() => setView("BasicInfo")}>Basic info</SNavItem>
          <SNavItem onClick={() => setView("Branding")}>Branding</SNavItem>
          <SNavItem onClick={() => setView("Members")}>Members</SNavItem>
        </SNavBox>
      </SCommunityNav>
      <SBody>{showView()}</SBody>
    </SCommunity>
  );
};

export default Community;

const SCommunity = styled.div`
  flex: 1;
  /* overflow-y: auto; */
  overflow-y: scroll;
  /* margin-bottom: 7rem; */
`;

const SCommunityNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem 0;
  border-bottom: 1px solid #b3b3b3;
`;

const SNavBox = styled.div`
  display: flex;
  width: 30rem;
  justify-content: space-between;
  padding: 2rem 0 1rem;
`;

const SNavItem = styled.p`
  cursor: pointer;
  color: #6c6c7d;
  user-select: none;
  font-size: 1.1rem;
`;

const SBody = styled.div`
  flex: 1;
`;
