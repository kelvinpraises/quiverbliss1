import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

interface IScaffoldProp {
  children: React.ReactNode;
  hide?: string[];
}

const Scaffold: React.FC<IScaffoldProp> = ({ hide, children }) => {
  return (
    <SScaffold>
      {hide?.includes("header") ? <></> : <Header />}
      <>{children}</>
      {hide?.includes("footer") ? <></> : <Footer />}
    </SScaffold>
  );
};

export default Scaffold;

const SScaffold = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
