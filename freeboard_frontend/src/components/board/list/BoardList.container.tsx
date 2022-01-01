import { useState } from 'react';
import BoardListPresenter from './BoardList.presenter'

const BoardListContainer = () => {
  const [input, setInput] = useState({});

  const handleInput = (e:any) => {
    console.log(e)
    setInput({...input, [e.target.name]: e.target.value});
  }
  console.log(input);
  
  return <BoardListPresenter handleInput={handleInput} />
}

export default BoardListContainer;