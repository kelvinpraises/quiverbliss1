import { kRadiusS } from "src/data/borderRadius";
import styled from "styled-components";
import Text from "./Text";

interface IText {
  backgroundColor?: string;
}

const Branding = () => {
  return (
    <SBox1>
      <SBox2>
        <SBox>
          <Text fontSize={"1.2rem"}>Profile picture</Text>
          <Text fontSize={"14px"} color={"#6C6C7D;"}>
            This is an image that should represent the community, it can be a
            logo or whatever pleases you
          </Text>
          <SDetail>
            <SProfile>
              <img src="/profile.svg" alt="" />
            </SProfile>
            <div>
              <Text fontSize={"14px"} color={"#6C6C7D;"}>
                It’s recommended to use a picture that’s at least 98 x 98 pixels
                and 4MB or less. Use a PNG or GIF (no animations) file.
              </Text>
              <SButton>Choose profile</SButton>
            </div>
          </SDetail>
        </SBox>
      </SBox2>
      <SBox2>
        <SBox>
          <Text fontSize={"1.2rem"}>Banner image</Text>
          <Text fontSize={"14px"} color={"#6C6C7D;"}>
            This image will appear across the top of your page when viewed by
            outsiders
          </Text>
          <SDetail>
            <SBanner>
              <img src="/banner-image.svg" alt="" width={"90px"} />
            </SBanner>
            <div>
              <Text fontSize={"14px"} color={"#6C6C7D;"}>
                For the best results, use an image that’s at least 2048 x 1152
                pixels and 6MB or less.
              </Text>
              <SButton>Choose banner</SButton>
            </div>
          </SDetail>
        </SBox>
      </SBox2>
      <SBox2>
        <SBox>
          <Text fontSize={"1.2rem"}>Featured video</Text>
          <Text fontSize={"14px"} color={"#6C6C7D;"}>
            Highlight a video to watch, it’s best to keep it short and let it
            explain what your community is all about
          </Text>
          <SInputBox>
            <Text color={"#6C6C7D;"} fontSize={"1.1rem"}>
              Title
            </Text>
            <SInput />
          </SInputBox>
          <SDetail>
            <SBanner>
              <img src="/banner-image.svg" alt="" width={"90px"} />
            </SBanner>
            <div>
              <Text fontSize={"14px"} color={"#6C6C7D;"}>
                Select or upload a picture that shows what's in your video. A
                good thumbnail stands out and draws viewers' attention.
              </Text>
              <SButton>Choose cover</SButton>
            </div>
          </SDetail>
          <SDetail>
            <SBanner backgroundColor={"#272727"}>
              <img src="/play.svg" alt="" width={"90px"} />
            </SBanner>
            <div>
              <Text fontSize={"14px"} color={"#6C6C7D;"}>
                It’s recommended to use a video that is not more than 5 minute
                long.
              </Text>
              <SButton>Choose video</SButton>
            </div>
          </SDetail>
        </SBox>
      </SBox2>
    </SBox1>
  );
};

export default Branding;

const SBox = styled.div`
  margin: 2rem 1.75rem 3rem;
  max-width: 45rem;
`;

const SProfile = styled.div`
  max-width: 9rem;
  width: 100%;
  margin-right: 1.4rem;
  background: #717171;
  border-radius: 50%;
  height: 9rem;
  display: grid;
  place-items: center;
`;

const SDetail = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
`;

const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: ${kRadiusS};
  color: ${({ theme }) => theme.text2};
  height: 2rem;
  background-color: ${({ theme }) => theme.accent1};
  font-weight: 600;
  font-family: "inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 0.9rem;
  text-align: center;
  transition: all 200ms ease;
  padding: 10px 22px;
  user-select: none;
  margin-top: 1rem;
  /* width: 12ch; */

  :hover {
    background-color: ${({ theme }) => theme.accent2};
  }

  :active {
    background-color: ${({ theme }) => theme.accent3};
  }
`;

const SBanner = styled.div<IText>`
  max-width: 9rem;
  width: 100%;
  margin-right: 1.4rem;
  /* background: #717171; */
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#717171"};
  border-radius: ${kRadiusS};
  height: 9rem;
  display: grid;
  place-items: center;
`;

const SInput = styled.input`
  border: 1px solid #b3b3b3;
  border-radius: ${kRadiusS};
  margin-top: 4px;
  width: 20rem;
  font-size: 16px;
  padding: 0.8rem 1rem;
  background-color: transparent;
  resize: none;
  outline: none;
`;

const SInputBox = styled.div`
  padding: 8px 0 8px 0;
`;

const SBox1 = styled.div`
  margin-bottom: 5rem;
`;

const SBox2 = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #b3b3b3;
`;
