import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import targetIcon from '../img/target.png';

const squaresColor = {
  battleship: 'red',
  cruiser: 'pink',
  destroyer: 'green',
  submarine: 'orange',
  ocean: '#1597E5',
  default: '#2E4B84',
};

const SquareStyled = styled.div`
  background-color: ${(props) => squaresColor[props.backgroundColor]};
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

const Square = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [squareColor, setSquareColor] = useState('default');
  const handleClick = () => {
    const { isFilled } = data;
    if (!isFilled) {
      setSquareColor('ocean');
    }
    setIsClicked(true);
  };

  return (
    <SquareStyled onClick={!isClicked ? handleClick : null} backgroundColor={squareColor}>
      <Icon src={targetIcon} alt="target icon" />
    </SquareStyled>
  );
};

export default Square;

Square.propTypes = {
  data: PropTypes.shape({
    isFilled: PropTypes.bool.isRequired,
    type: PropTypes.string,
    shipSquares: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};
