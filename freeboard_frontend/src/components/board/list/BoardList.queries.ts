import { gql } from "@apollo/client";

export const BEST_BOARDS = gql`
  query fetchBoardsOfTheBest{
    fetchBoardsOfTheBest {
      _id
      writer
      user {
        name
        picture
      }
      title
      updatedAt
      likeCount
      images
    }
  }
`