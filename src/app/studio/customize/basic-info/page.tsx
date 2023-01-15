"use client";

import styled from "styled-components";

import { TextInput } from "@components/TextInput";
import useStudioInputs from "@hooks/studio/studioInputs";

export default function CustomizeBasicInfoPage() {
  const { communityState, communityDispatch } = useStudioInputs();

  return (
    <SCustomizeBasicInfoPage>
      <TextInput
        onChange={(x) => {
          communityDispatch({
            type: "SET_NAME",
            payload: { name: x.target.value },
          });
        }}
        heading={"Name"}
        subheading={"Choose a name that represents your community."}
        value={communityState?.name!}
      />
      <TextInput
        type="textArea"
        onChange={(x) => {
          communityDispatch({
            type: "SET_DESCRIPTION",
            payload: { description: x.target.value },
          });
        }}
        heading={"Description"}
        subheading={"Tell viewers more about your channel."}
        value={communityState?.description!}
      />
    </SCustomizeBasicInfoPage>
  );
}

const SCustomizeBasicInfoPage = styled.section`
  width: 40rem;
  padding: 2rem 0 0;
`;
