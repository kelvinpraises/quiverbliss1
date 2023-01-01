import styled from "styled-components";
import Text from "../../../common/components/Text";
import { kRadiusL } from "../../../constants/borderRadius";
import { kMaxContentWidth } from "../../../constants/width";
import Avatar from "../components/Avatar";
import VideoPlayer from "../components/VideoPlayer";
import useProject from "../hooks/project";

const ProjectIntro = () => {
  const { getProjectIntro } = useProject();

  const { videoProps } = getProjectIntro();

  return (
    <SProjectIntro>
      <SCardContainer>
        <VideoPlayer
          title={videoProps?.title!}
          playbackId={videoProps?.playbackId!}
          poster={videoProps?.poster!}
          showTitle={videoProps?.showTitle!}
          type="projectIntro"
        />
        <SProjectIntroDetails>
          <SProjectIntroHeading>
            <Avatar
              type={"projectIntro"}
              src={"/profile.svg"}
              alt={"profile picture"}
            />
            <div>
              <STitle type="h5">Designs for Orbis Hackathon!</STitle>
              <SOrganization>Dreampiper</SOrganization>
            </div>
          </SProjectIntroHeading>
          <Text>
            SMM – A social management app concept I&apos;ve made, this might also fit
            the task management app. Do you want to see it in dark-mode, please
            let me know your thoughts in the comment form below. Thanks for your
            time.
          </Text>
        </SProjectIntroDetails>
        {/* TODO: <Carousel /> */}
        {/* <Stats type="projectIntro" /> */}
      </SCardContainer>
    </SProjectIntro>
  );
};

export default ProjectIntro;

const SProjectIntro = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;

const SCardContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  border-radius: ${kRadiusL};
  margin: 1rem;
  background-color: ${({ theme }) => theme.card};
`;

const SProjectIntroHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const SProjectIntroDetails = styled.div`
  margin: 24px;
  margin-left: 0;
  max-width: 25rem;
`;

const STitle = styled(Text)`
  font-weight: 600;
  font-size: 20px;
`;

const SOrganization = styled(Text)`
  font-weight: 400;
  margin-top: 6px;
  font-size: 18px;
`;
