import styled from "@emotion/styled";
import {styleCheckProps} from './Login.types'

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
export const StyledCheckbox = styled.div<styleCheckProps>`
  width: 20px;
  height: 20px;
  border: ${props => props.isChecked ? 'none' : '1px solid #fff'};
  border-radius: 50%;
  background-color: ${props => props.isChecked ? '#FFD600;' : 'transparent'};
  
  `
  // &:after {
  //   content: '';
  //   width: 12px;
  //   height: 6px;
  //   border: 2px solid #fff;
  //   border-top: none;
  //   border-right: none;
  //   transform: rotate(-45deg);
  // }
// export const HiddenCheckbox = styled.input`
//   visibility: hidden;
// `
export const HiddenCheckbox = styled.input`
width: 1px;
height: 1px; 
margin: -1px; 
padding: 0; 
position: absolute; 
border: 0; 
clip: rect(0 0 0 0); 
clippath: inset(50%); 
overflow: hidden; 
white-space: nowrap; 
`
export const Icon = styled.svg` 
  fill: none; 
  stroke: white; 
  stroke-width: 2px; 
`;

export const SignUpContainer = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
  border-top: 1px solid #fff;
  & > * {
    color: #fff;
    font-size: 12px;
  }
`