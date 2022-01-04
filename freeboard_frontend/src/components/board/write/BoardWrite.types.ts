export interface IboardWirteProps {
  handleInput: (e: any) => void;
  // handleCreateBoard: () => Promise<void>;
  inputData: any;
  handleAddressModal: () => void;
  handleComplete: (data: object) => void;
  isModal: boolean;
  checkRequirements: () => void;
  requirements: any;
}

export type InputContainerProps = {
  width?: string;
}
export type InputProps = {
  width?: string;
  isAvailable?: boolean;
}
export type TextAreaProps = {
  isAvailable?: boolean;
}
export type ButtonProps = {
  padding?: string
  bgColor?: string
  color?: string
  fontWeight?: number
}
