import Image from "next/image";
import styled from "styled-components";
import { kRadiusS } from "../../../constants/borderRadius";

const FollowButton = () => {
  return (
    <SButton>
      <Image
        src="/follow.svg"
        alt="Follow icon"
        width={17}
        height={17}
        priority
      />
      &nbsp; &nbsp; Follow &nbsp;
    </SButton>
  );
};

export default FollowButton;

const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${kRadiusS};
  color: black;
  height: 2rem;
  background-color: #ffffff;
  font-weight: 600;
  font-family: "inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 1rem;
  text-align: center;
  transition: all 200ms ease;
  padding: 10px 16px;
  user-select: none;
  margin: 1rem;
  box-shadow: 0px 4px 15px 1px #f0f1f8;

  :hover {
    background-color: #e5e5e5;
  }

  :active {
    background-color: #cdcdcd;
  }
`;
