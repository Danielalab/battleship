import styled from 'styled-components';
import buildInitialTable from '../controllers/buildShips';
import Square from './Square';

const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 420px;
`;

const TableGame = () => {
  const squares = buildInitialTable();
  return (
    <Table>
      {squares.map((square) => <Square data={square} />)}
    </Table>
  );
};

export default TableGame;
