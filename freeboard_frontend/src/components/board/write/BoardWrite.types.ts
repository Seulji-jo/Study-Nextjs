export interface IboardWirteProps {
  handleInput: (e: any) => void;
  handleCreateBoard: () => Promise<void>;
  inputData: any
}

export type IinputContainerProps = {
  width: string | number;
}
export type IinputProps = {
  width: string | number | boolean;
}
export type Ibutton = {
  padding: string
  bgColor: string
  color: string
  fontWeight: number
}
