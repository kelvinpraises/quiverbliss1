import { LivepeerConfig, Player } from "@livepeer/react";

import { client, theme } from "@data/livepeer";

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
    <LivepeerConfig client={client} theme={theme}>
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
    </LivepeerConfig>
  );
};

export default LivepeerPlayer;
