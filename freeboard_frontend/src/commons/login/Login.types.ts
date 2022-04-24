export interface Ilogin {
  isChecked: boolean;
  handleCheckbox: () => void;
  handleLogin: (e:any) => void;
}

export type styleCheckProps = {
  isChecked: boolean;
}