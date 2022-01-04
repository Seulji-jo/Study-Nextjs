export interface IboardWirteProps {
  handleInput: (e: any) => void;
  handleCreateBoard: () => Promise<void>;
  handleModal: () => void;
  handleComplete: (data: object) => void;
  isModal: boolean;
  inputData: any
}

export type InputContainerProps = {
  width?: string;
}
export type InputProps = {
  width?: string;
}
export type ButtonProps = {
  padding?: string
  bgColor?: string
  color?: string
  fontWeight?: number
}
