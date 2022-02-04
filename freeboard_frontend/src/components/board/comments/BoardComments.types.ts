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
  handleModify: () => void;
}
export type CmntContentRowProps = {
  justify?: string;
}