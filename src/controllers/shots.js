export const resgisterAShotAndGetShipPositions = (squares, squareId) => {
  const squareClicked = squares.find((square) => square.id === squareId);
  squareClicked.isClicked = true;
  return squareClicked.shipSquares;
};

