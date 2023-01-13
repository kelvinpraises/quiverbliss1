"use client";

import { useRouter } from "next/navigation";
import { styled } from "styled-components";

import Avatar from "@components/Avatar";
import Labels from "@components/Labels";
import VideoPlayer from "@components/VideoPlayer";
import { kRadiusL } from "@data/borderRadius";
import projectNavRoutes from "@data/projectNavRoutes";
import { kMaxContentWidth } from "@data/width";
import useProject from "@hooks/project/project";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { getProjectIntro, getProjectLabels } = useProject();
  const introProps = getProjectIntro();
  const labels = getProjectLabels();

  // TODO: Empty state here!
  if (typeof introProps === "undefined") return <p>Project not found</p>;

  const { videoProps, bioProps } = introProps;

  return (
    <>
      <SProjectIntro>
        <SCardContainer>
          <VideoPlayer
            title={videoProps?.title}
            playbackId={videoProps?.playbackId}
            poster={videoProps?.poster}
            showTitle={videoProps?.showTitle}
            type="projectIntro"
          />
          <SProjectIntroDetails>
            <SProjectIntroHeading>
              <Avatar
                type={"projectIntro"}
                src={bioProps.avatar}
                alt={bioProps.name}
              />
              <div>
                <STitle>{bioProps.title}</STitle>
                <SOrganization>{bioProps.name}</SOrganization>
              </div>
            </SProjectIntroHeading>
            <p>{bioProps.description}</p>
          </SProjectIntroDetails>
        </SCardContainer>
      </SProjectIntro>

      <SProjectLabels>
        {labels?.map((label, index) => (
          <Labels key={index} type={label as LabelTypes} />
        ))}
      </SProjectLabels>

      {/* TODO: remove to own component */}
      <SNavigation>
        {projectNavRoutes.map((r) => (
          <SNavItems onClick={() => router.push(r.link)}>{r.name}</SNavItems>
        ))}
      </SNavigation>

      {children}
    </>
  );
}

const SSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

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
  flex: 1;
  margin: 24px;
  margin-left: 0;
  max-width: 25rem;
`;

const STitle = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

const SOrganization = styled.p`
  font-weight: 400;
  margin-top: 6px;
  font-size: 18px;
`;

const SProjectLabels = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2em;
  width: 100%;
  max-width: ${kMaxContentWidth};
`;

const SNavigation = styled.nav`
  display: flex;
  justify-content: center;
  max-width: ${kMaxContentWidth};
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #9397b7;
  margin: 1rem 0 2rem;
  width: 100%;
`;

const SNavItems = styled.div`
  user-select: none;
  font-size: 1.5rem;
  margin: 0 2.6rem;
  cursor: pointer;
`;
