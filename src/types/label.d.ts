type LabelTypes = "voting" | "feedback" | "on-chain";

interface ILabelsProp {
  type: LabelTypes;
  small?: boolean
}

interface ISLabelProp {
  color: string;
  backgroundColor: string;
  small?: boolean
}
