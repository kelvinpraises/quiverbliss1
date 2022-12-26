import styled from "styled-components";
import Text from "../../../common/components/Text";
import { kMaxContainerWidth } from "../../../common/constants/width";
import VideoPlayer from "../components/VideoPlayer";

const CommunityIntro = () => {
  return (
    <SCommunityIntro>
      <VideoPlayer type="communityIntro"/>
      <SSideIntro>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          quam quis, necessitatibus distinctio beatae consectetur eveniet
          pariatur numquam itaque quisquam provident iste ea, sint natus
          voluptas cum. Cumque, aliquam eveniet.
        </Text>
      </SSideIntro>
    </SCommunityIntro>
  );
};

export default CommunityIntro;

const SCommunityIntro = styled.section`
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
  max-width: ${kMaxContainerWidth};
`;

const SSideIntro = styled.div`
  flex: 1;
`;
