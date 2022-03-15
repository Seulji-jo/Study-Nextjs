export interface IformData {
  [x: string]: any;
}
export interface Isignup {
  closePage: () => void;
  submitSignupForm: (formData: IformData) => void;
}

export type CloseBtnProps = {
  btnSrc: string;
}
export type backgroundProps = {
  bgImg: StaticImageData | string;
}