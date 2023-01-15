import styled from "styled-components";

const ConstructionPage = () => {
  return (
    <SConstruction>
      <img src="/construction.svg" alt="construction logo" />
      <SHeading>Under Construction</SHeading>
      <SSubHeading>
        This is still in beta, we are working to hard to make Quiverbliss
        better, please check other active sections!
      </SSubHeading>
    </SConstruction>
  );
};

export default ConstructionPage;

const SConstruction = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

const SHeading = styled.h1`
  font-size: 3rem;
  margin: 3rem 0 1.5rem;
  color: #444c5a;
`;

const SSubHeading = styled.h2`
  color: #444c5a;
`;
