import Image from "next/image";
import styled from "styled-components";

const Avatar: React.FC<IAvatarProp> = ({ type, src, alt }) => {
  let avatar: React.ReactElement;

  const communityCover = (
    <SCommunityCoverAvatar>
      <Image
        src={src}
        style={{ objectFit: "cover", zIndex: 0 }}
        fill
        priority
        alt={alt}
      />
    </SCommunityCoverAvatar>
  );

  const communityCards = (
    <SCommunityCardsAvatar>
      <Image
        src={src}
        style={{ objectFit: "cover", zIndex: 0 }}
        fill
        priority
        alt={alt}
      />
    </SCommunityCardsAvatar>
  );

  switch (type) {
    case "communityCover":
      avatar = communityCover;
      break;

    case "communityCards":
      avatar = communityCards;
      break;

    default:
      avatar = <></>;
      break;
  }

  return avatar;
};

export default Avatar;

const SAvatar = styled.div`
  position: relative;
  z-index: 1;
  background: black;
  border-radius: 50%;
  margin: 1rem;
  overflow: hidden;
`;

const SCommunityCoverAvatar = styled(SAvatar)`
  width: 10rem;
  min-width: 10rem;
  height: 10rem;
`;

const SCommunityCardsAvatar = styled(SAvatar)`
  width: 7rem;
  height: 7rem;
  margin: 2rem;
  margin-right: 1rem;
`;
