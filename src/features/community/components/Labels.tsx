import styled from "styled-components";

const Labels: React.FC<ILabelsProp> = ({ type, small }) => {
  let label: React.ReactElement;

  const voting = (
    <SLabel small={small} color="#00CBD4" backgroundColor="#B2FCFF">
      VOTING
    </SLabel>
  );

  const feedback = (
    <SLabel small={small} color="#00D53E" backgroundColor="#B0FFCC">
      FEEDBACK
    </SLabel>
  );

  const onChain = (
    <SLabel small={small} color="#894DD9" backgroundColor="#C4C2FF">
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

Labels.defaultProps = {
  small: false,
};

export default Labels;

const SLabel = styled.div<ISLabelProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  width: fit-content;
  border-radius: 3px;
  line-height: 19px;
  padding: 0.2em 0.4em;
  margin: 0 0 0.5rem 1rem;

  ${({ small }) => {
    if (!small) return;
    return `
      font-size: .7rem;
      margin: .4rem;
      margin-left: 0;
      margin-top: 0;
    `;
  }}
`;
