import styled from "styled-components";

const Bio: React.FC<IBioProp> = ({ type, name, description }) => {
  let bio: React.ReactElement;

  const community = (
    <SBio>
      <SName>{name.toUpperCase()}</SName>
      <SDescription>{description}</SDescription>
    </SBio>
  );

  switch (type) {
    case "communityIntro":
      bio = community;
      break;

    default:
      bio = <></>;
      break;
  }

  return bio;
};

export default Bio;

const SBio = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45ch;
`;

const SName = styled.p`
  font-size: 2rem;
  color: ${({ theme, color }) => (color ? color : theme.text1)};
  margin: 1rem;
`;

const SDescription = styled.p`
  margin: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme, color }) => (color ? color : theme.text1)};
`;
