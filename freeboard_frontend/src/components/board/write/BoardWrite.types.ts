import { Board } from '../../../commons/types/generated/types'

export interface Iinput {
  writer?: string, 
  password?: string,
  title: string,
  contents: string,
  youtubeUrl?: string,
  boardAddress?: {
    zipcode?: string,
    address?: string,
    addressDetail?: string,
  },
  images?: any[],
  mainSetting?: string,
  _id?: string
}

export interface IboardWirteProps {
  handleInput: (e: any) => void;
  // handleCreateBoard: () => Promise<void>;
  inputData: any;
  handleAddressModal: () => void;
  handleComplete: (data: object) => void;
  isModal: boolean;
  submitBoardForm: () => void;
  imgArr: any[];
  requirements: any;
  data?: Board;
  onChangeImage: (e: any) => void;
  isEditPage: boolean;
  cancelToUpdate: () => void;
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
