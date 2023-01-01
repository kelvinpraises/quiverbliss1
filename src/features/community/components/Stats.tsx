import styled from "styled-components";

const Stats: React.FC<IStatsProp> = ({ type }) => {
  let stats: React.ReactElement;

  const project = <SProjectStats>Project Stats</SProjectStats>;

  switch (type) {
    case "projectIntro":
      stats = project;
      break;

    default:
      stats = <></>;
      break;
  }

  return stats;
};

export default Stats;

const SProjectStats = styled.div``;
