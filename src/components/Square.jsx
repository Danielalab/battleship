import styled from 'styled-components';
import targetIcon from '../img/target.png';

/* const shipColor = {
  battleship: 'red',
  cruiser: 'pink',
  destroyer: 'green',
  submarine: 'orange',
}; */

// const chooseShipColor = ({ data }) => (data.isFilled ? shipColor[data.type] : '#1597E5');

const SquareStyled = styled.div`
  background-color: #2E4B84;
  border: 1px solid #1151B5;
  box-sizing: border-box;
  cursor: pointer;
  height: 40px;
  margin: 1px;
  width: 40px;
  :hover > img {
    background-color: #007a00;
    visibility: visible;
  }
`;

const Icon = styled.img`
  padding: 4px;
  visibility: hidden;
  transition: all 0.05s ease-in;
`;

const Square = () => (
  <SquareStyled>
    <Icon src={targetIcon} alt="target icon" />
  </SquareStyled>
);

export default Square;
