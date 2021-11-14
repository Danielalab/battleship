export const ships = [
  { type: 'battleship', size: 4, total: 1 },
  { type: 'submarine', size: 3, total: 2 },
  { type: 'cruiser', size: 2, total: 3 },
  { type: 'destroyer', size: 1, total: 4 },
];

const getShipPositions = (ship, initialPosition, offset) => {
  const positions = [];
  for (let index = 0; index < ship.size; index += 1) {
    positions.push(initialPosition + (index * offset));
  }
  return positions;
};

const buildShip = (squares, ship) => {
  /* direction:
  - 0 => 'horizontal'
  - 1 => 'vertical' */
  const direction = Math.floor(Math.random() * 2);
  const offset = (direction ? 10 : 1); // squares between each position
  const randomPosition = Math.abs(
    Math.floor(Math.random() * 100 - (ship.size * offset)),
  );
  const shipPositions = getShipPositions(ship, randomPosition, offset);
  const positionIsFilled = shipPositions.some((position) => squares[position].isFilled);
  const shipIsAtRightBorder = shipPositions.some((position) => position % 10 === 9);
  const shipIsAtLeftBorder = shipPositions.some((position) => position % 10 === 0);

  if (ship.size === 1 && !positionIsFilled) {
    return shipPositions;
  }
  if (!positionIsFilled && !shipIsAtRightBorder && !shipIsAtLeftBorder) {
    return shipPositions;
  }
  return buildShip(squares, ship);
};

export const buildInitialTable = () => {
  const squares = Array(100).fill(null).map((_, index) => ({ isFilled: false, id: `square-${index}` }));
  ships.forEach((ship) => {
    const { total, type } = ship;
    for (let index = 0; index < total; index += 1) {
      const shipSquares = buildShip(squares, ship);
      shipSquares.forEach((squarePosition) => {
        squares[squarePosition] = {
          ...squares[squarePosition],
          isFilled: true,
          type,
          shipSquares,
          isClicked: false,
        };
      });
    }
  });
  return squares;
};

export const buildNewSquares = (prevSquares, shipPositions) => {
  const newSquares = [...prevSquares];
  shipPositions.forEach((index) => {
    newSquares[index] = {
      ...newSquares[index],
      isDestroyed: true,
    };
  });
  return newSquares;
};
