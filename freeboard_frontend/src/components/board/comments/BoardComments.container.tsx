import { useState } from 'react';
import BoardCommentsPresenter from './BoardComments.presenter'

const BoardCommentsContainer = () => {
  const [rating, setRating] = useState('0');

  const handleSaveRating = (e: any) => {
    console.log(e.target.id);
    setRating(e.target.id)
  }
  return <BoardCommentsPresenter rating={rating} handleSaveRating={handleSaveRating} />
}

export default BoardCommentsContainer;