export interface IboardArticleProps {
  isHover: boolean;
  handleHover: () => void;
}

export type Avartar = {
  avatar?: string
}
export type Text = {
  fontSize?: string;
  color?: string;
}
export type ButtonProps = {
  padding?: string;
  bgColor?: string;
  color?: string;
  border?: string;
  fontWeight?: number;
}
