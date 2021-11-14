import styled from 'styled-components';
import { squaresColor } from '../../util';

const SquareStyled = styled.div`
  background: ${(props) => squaresColor[props.backgroundColor]};
  border: 1px solid #1151B5;
  box-sizing: border-box;
  cursor: pointer;
  height: 40px;
  margin: 1px;
  width: 40px;
  transition: background-color 0.05s ease-in;
  :hover > .target-icon {
    background-color: #007a00;
    visibility: visible;
  }
`;

export default SquareStyled;
