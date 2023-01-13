import { Player } from "@livepeer/react";


const LivepeerPlayer: React.FC<ILivepeerPlayerProp> = ({
  title,
  playbackId,
  showTitle,
  poster,
  muted,
  autoPlay,
  containerBorderRadius,
}) => {
  const prop = { title, playbackId, showTitle, poster, muted, autoPlay };

  return (
      <Player
        {...prop}
        aspectRatio="16to9"
        showPipButton
        controls={{
          autohide: 3000,
        }}
        theme={{
          radii: { containerBorderRadius },
        }}
      />
  );
};

export default LivepeerPlayer;
