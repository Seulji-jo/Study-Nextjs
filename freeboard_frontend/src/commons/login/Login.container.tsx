import { useState } from "react";
import LoginPresenter from "./Login.presenter";

const LoginContainer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }
  return <LoginPresenter isChecked={isChecked} handleCheckbox={handleCheckbox} />
}

export default LoginContainer;