import styled from "styled-components";

interface IScaffoldProp {
  children: React.ReactNode;
}

const Scaffold: React.FC<IScaffoldProp> = ({ children }) => {
  return (
    <SScaffold>
      <SContainer>{children}</SContainer>
    </SScaffold>
  );
};

export default Scaffold;

const SScaffold = styled.div`
  display: flex;
`;

const SContainer = styled.div`
  width: 100%;
`;
