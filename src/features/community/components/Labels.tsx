import styled from "styled-components";

const Labels: React.FC<ILabelsProp> = ({ type }) => {
  let label: React.ReactElement;

  const voting = (
    <SLabel color="#00CBD4" backgroundColor="#B2FCFF">
      VOTING
    </SLabel>
  );

  const feedback = (
    <SLabel color="#00D53E" backgroundColor="#B0FFCC">
      FEEDBACK
    </SLabel>
  );

  const onChain = (
    <SLabel color="#894DD9" backgroundColor="#C4C2FF">
      ON-CHAIN
    </SLabel>
  );

  switch (type) {
    case "voting":
      label = voting;
      break;

    case "feedback":
      label = feedback;
      break;

    case "on-chain":
      label = onChain;
      break;

    default:
      label = <></>;
      break;
  }

  return label;
};

export default Labels;

const SLabel = styled.div<ISLabelProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  width: min-content;
  padding: 0.2em;
`;
