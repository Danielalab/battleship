import styled from 'styled-components';

const shipColor = {
  battleship: 'red',
  cruiser: 'pink',
  destroyer: 'green',
  submarine: 'orange',
};

const chooseShipColor = ({ data }) => (data.isFilled ? shipColor[data.type] : '#1597E5');

const Square = styled.div`
  background-color: ${chooseShipColor};
  border: 1px solid #113CFC;
  box-sizing: border-box;
  height: 40px;
  width: 40px;
`;

export default Square;
