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
  changeModifyStatus: () => void;
  isModify: boolean;
  updateComment: () => void;
  loadMore: () => void;
}
export type CmntContentRowProps = {
  justify?: string;
}