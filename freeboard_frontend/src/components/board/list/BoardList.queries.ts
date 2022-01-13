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
export const FETCH_BOARDS = gql`
  query fetchBoards($endDate: DateTime, $startDate: DateTime,$search: String, $page: Int) {
    fetchBoards(endDate: $endDate, startDate: $startDate,search: $search, page: $page) {
      _id
      writer
      title
      updatedAt
    }
  }
`

export const BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`