import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Logo: React.FC<ILogoProp> = ({ type }) => {
  return (
    <>
      <SLink
        passHref={true}
        href={"/"}
      >
        <Image
          src="/quiverbliss.svg"
          alt="Quiverbliss Logo"
          width={120}
          height={32}
          priority
        />
      </SLink>
    </>
  );
};

export default Logo;

const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
