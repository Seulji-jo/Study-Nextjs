import { Board } from "../../../commons/types/generated/types"

export interface IboardListProps {
  handleInput: (e: any) => void;
  bestBoards: Board[];
  boardLists: Board[];
  pageArr: number[];
  currPage: number;
  changeCurrPage: (pageNum: number) => void;
  prevPageArr: () => boolean;
  nextPageArr: () => boolean;
}

export type textProps = {
  fontSize?: string | undefined;
  color?: string | undefined;
}

export type imgProps = {
  img?: string
}

export type btnProps = {
  backgroundColor?: string;
  border?: string;
  color?: string;
}