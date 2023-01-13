import React from "react";
import styled from "styled-components";
import Text from "./Text";

const ConstructionPage = () => {
  return (
    <SConstruction>
      <img src="/construction.svg" alt="construction logo" />
      <SText type="h1">Under Construction</SText>
      <Text color={"#444C5A"}>
        This is still in beta, we are working to hard to make Quiverbliss better, please check back later!
      </Text>
    </SConstruction>
  );
};

export default ConstructionPage;

const SConstruction = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

const SText = styled(Text)`
  margin: 3rem 0 1.5rem;
  color: #444c5a;
`;
