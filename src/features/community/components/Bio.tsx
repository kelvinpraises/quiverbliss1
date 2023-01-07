import styled from "styled-components";
import Text from "../../common/components/Text";

const Bio: React.FC<IBioProp> = ({ type, name, description }) => {
  let bio: React.ReactElement;

  const community = (
    <SBio>
      <Text style={{ margin: "1rem" }} type="h3">{name.toUpperCase()}</Text>
      <Text style={{ "line-height": "1", margin: "1rem" }} type="h2">
        {description}
      </Text>
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
