import { BoardComment } from "../../../commons/types/generated/types";

export interface IboardCommentsProps {
  rating: string;
  handleSaveRating: (e: any) => void;
  comment: {
    writer: string;
    password: string;
    contents: string;
  }
  handleComment: (e: any) => void;
  submitComment: () => void;
  commentLists: BoardComment[];
  loadMore: () => void;
}
export interface IupdateCmnt {
  password: string;
  contents: string;
  rating: number;
}

export type CmntContentRowProps = {
  justify?: string;
}

export type CmntWriteProps = {
  height?: string;
}