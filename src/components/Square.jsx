import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import targetIcon from '../img/target.png';
import equixIcon from '../img/equix.png';

const squaresColor = {
  /* battleship: 'red',
  cruiser: 'pink',
  destroyer: 'green',
  submarine: 'orange', */
  ocean: '#1597E5',
  default: '#2E4B84',
  shot: '#952226',
};

const SquareStyled = styled.div`
  background-color: ${(props) => squaresColor[props.backgroundColor]};
  border: 1px solid #1151B5;
  box-sizing: border-box;
  cursor: pointer;
  height: 40px;
  margin: 1px;
  width: 40px;
  :hover > .target-icon {
    background-color: #007a00;
    visibility: visible;
  }
`;

const Icon = styled.img`
  padding: 4px;
  visibility: hidden;
  transition: all 0.05s ease-in;
`;

const SuccessfulShotIcon = styled(Icon)`
  visibility: visible;
  padding: 8px;
`;

const Square = ({ data, subtractAChance }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [squareColor, setSquareColor] = useState('default');
  const handleClick = () => {
    const { isFilled } = data;
    if (!isFilled) {
      setSquareColor('ocean');
    } else {
      setSquareColor('shot');
    }
    setIsClicked(true);
    subtractAChance();
  };

  return (
    <SquareStyled onClick={!isClicked ? handleClick : null} backgroundColor={squareColor}>
      {squareColor !== 'shot' && <Icon src={targetIcon} alt="target icon" className="target-icon" />}
      {squareColor === 'shot' && <SuccessfulShotIcon src={equixIcon} alt="Equix icon" />}
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
  subtractAChance: PropTypes.func.isRequired,
};
