// container에는 함수, 상태, 로직 이런것만 관리

import { useState } from "react";
import BoardWritePresenter from "./BoardWrite.presenter";

const BoardWriteContainer = () => {
  const [input, setInput] = useState({writer: ''});

  const handleInput = (e:any) => {
    setInput({...input, [e.target.name]:e.target.value});
  }

  console.log(input)
  return <BoardWritePresenter handleInput={handleInput} />
};

export default BoardWriteContainer;