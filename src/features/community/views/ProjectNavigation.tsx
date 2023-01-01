import styled from "styled-components";
import Text from "../../../common/components/Text";
import { kMaxContentWidth } from "../../../common/constants/width";

interface INavView {
  setState: any;
}

const ProjectNavigation: React.FC<INavView> = ({ setState }) => {
  return (
    <SNav>
      <SNavItems onClick={() => setState("home")}>Home</SNavItems>
      <SNavItems onClick={() => setState("vote")}>Vote</SNavItems>
      <SNavItems onClick={() => setState("details")}>Details</SNavItems>
    </SNav>
  );
};

export default ProjectNavigation;

const SNav = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${kMaxContentWidth};
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #9397b7;
  margin: 1rem 0 2rem;
  width: 100%;
`;

const SNavItems = styled.div`
  user-select: none;
  font-size: 1.5rem;
  margin: 0 2.6rem;
  cursor: pointer;
`;
