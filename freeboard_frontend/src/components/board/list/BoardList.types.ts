import { Board } from "../../../commons/types/generated/types"

export interface IboardListProps {
  bestBoards: Board[];
  boardLists: Board[];
  openBoard: (id: string) => void;
  searchVal: string;
  handleSearch: (e: any) => void;
  handleDate: (dates: any, dateStrings: any) => void;
  pageArr: number[];
  currPage: number;
  changeCurrPage: (pageNum: number) => void;
  prevPageArr: () => boolean;
  nextPageArr: () => boolean;
  changeStartPage: () => void;
  changeEndPage: () => void;
  clickSearchBtn: () => void;
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