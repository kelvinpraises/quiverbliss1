import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Text from "../../../common/components/Text";
import { kRadiusM } from "../../../constants/borderRadius";
import { kMaxContentWidth } from "../../../constants/width";
import clampBuilder from "../../../utils/clampBuilder";
import Avatar from "./Avatar";
import Labels from "./Labels";

const Cards: React.FC<ICardsProp> = ({ type, communityCard, projectCard }) => {
  let card: React.ReactElement;

  const parentId = "xyz";

  const project = (
    <SProjectCard>
      <SLink
        passHref={true}
        href={`/communities/${parentId}/project?p=${projectCard?.id}`}
      >
        <SProjectPreview>
          <Image
            src={projectCard?.previewImage!}
            style={{ objectFit: "cover", zIndex: 0 }}
            fill
            priority
            alt={projectCard?.name!}
          />
        </SProjectPreview>
        <SProjectDetails>
          <SProjectTitle>
            <Text type="h5">{projectCard?.name}</Text>
          </SProjectTitle>
          <SProjectLabels>
            {projectCard?.labels.map((label, index) => (
              <Labels key={index} type={label as LabelTypes} small={true} />
            ))}
          </SProjectLabels>
        </SProjectDetails>
      </SLink>
    </SProjectCard>
  );

  const community = (
    <SCommunityCard>
      <SLink passHref={true} href={"/communities/" + communityCard?.id}>
        <Avatar
          type={"communityCards"}
          src={communityCard?.avatar!}
          alt={"hh"}
        />
        <div>
          <SCommunityName>{communityCard?.name}</SCommunityName>
          <SCommunityLocation>{communityCard?.location}</SCommunityLocation>
        </div>
      </SLink>
    </SCommunityCard>
  );

  const ghost = <SGhostCard></SGhostCard>;

  switch (type) {
    case "projectCards":
      card = project;
      break;

    case "communityCards":
      card = community;
      break;

    case "ghost":
      card = ghost;
      break;

    default:
      card = <></>;
      break;
  }

  return card;
};

export default Cards;

const SCard = styled.div`
  border-radius: ${kRadiusM};
  background-color: ${({ theme }) => theme.card};
  border: 1.2px solid ${({ theme }) => theme.cardBorder};
  margin: 1rem;
`;

const SProjectCard = styled(SCard)`
  flex: 1;
  width: 20rem;
  min-width: 20rem;
  height: ${clampBuilder(320, 1200, 13, 11)};

  @media only screen and (max-width: 703px) {
    flex: none;
    min-width: ${clampBuilder(320, 703, 20, 35)};
    margin-left: auto;
    margin-right: auto;
  }
`;

const SProjectPreview = styled.div`
  position: relative;
  min-width: 10rem;
  height: 10rem;
  margin: 1rem;
  border-radius: ${kRadiusM};
  border: 1.2px solid #d9d9d9;
  overflow: hidden;
`;

const SProjectDetails = styled.div`
  display: flex;
  height: 10rem;
  flex-direction: column;
  margin: 1rem;
  margin-left: 0;
`;

const SProjectTitle = styled.div`
  max-height: 5rem;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const SProjectLabels = styled.section`
  max-height: 5rem;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */
  /* width: 100%; */
  /* max-width: ${kMaxContentWidth}; */
`;

const SCommunityCard = styled(SCard)`
  flex: 1;
  min-width: 20rem;
  /* height: ${clampBuilder(320, 1200, 13, 11)}; */

  @media only screen and (max-width: 703px) {
    flex: none;
    min-width: ${clampBuilder(320, 703, 20, 35)};
    margin-left: auto;
    margin-right: auto;
  }
`;

const SCommunityName = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 29px;
`;

const SCommunityLocation = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 2rem;
  color: #7c7c7c;
`;

const SGhostCard = styled.div`
  flex: 1;
  min-width: 20rem;
  height: 0;
  margin: 0 1rem;
  visibility: hidden;

  @media only screen and (max-width: 703px) {
    display: none;
  }
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;
