import styled from "@emotion/styled";
import { RowProps, ButtonProps, textProps } from "./types";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  
  & > * + * {
    margin-top: 80px;
  }
`
export const BoardContainer = styled.article`
  width: 65%;
  max-width: 960px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  
  overflow: hidden;
  border-top: 1px solid #BDBDBD;
`
export const Row = styled.div<RowProps>`
  width: 100%;
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: ${props => props.marginLeft}
  }
`
export const Button = styled.button<ButtonProps>`
  width: ${props => props.width};
  display: ${props => props.width ? 'inline-block': 'inline'};
  padding: ${props => props.padding ?? '12px 16px'};
  font-size: ${props => props.fontSize ?? '1.4rem'};
  background-color: ${props => props.bgColor ?? '#333'};
  color: ${props => props.color ?? '#fff'};
  border: ${props => props.border ?? 'none'};
  border-radius: ${props => props.radius ?? '0'};
  font-weight: ${props => props.fontWeight ?? 400};
`

export const Text = styled.div<textProps>`
font-size: ${props => props.fontSize ?? '1.8rem'};
font-weight: ${props => props.fontWeight ?? '400'};
color: ${props => props.color ?? '#333'}
`