interface IVideoPlayerProp extends ILivepeerPlayerProp {
  type: "artBoardInfo" | "projectIntro" | "communityIntro";
}

interface ILivepeerPlayerProp {
  title: string;
  playbackId: string;
  showTitle: boolean;
  poster: string;
  muted?: boolean;
  autoPlay?: boolean;
  containerBorderRadius?: any;
}
