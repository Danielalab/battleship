import styled from 'styled-components';
import Square from './Square';

const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
`;

const TableGame = () => {
  const squares = Array(100).fill({ isFilled: false });
  return (
    <Table>
      {squares.map((square) => <Square data={square} />)}
    </Table>
  );
};

export default TableGame;
