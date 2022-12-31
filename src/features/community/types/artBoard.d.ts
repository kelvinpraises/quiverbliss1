type ArtBoardType = "figma";

interface IArtBoard {
  type: ArtBoardType;
  index: number;
  get: any;
  set: any;
  url: string
}

interface IArtBoardInfo {
  get: any;
  set: any;
}

interface ISArtBoardInfo {
 top: number
 visibility: string
}
