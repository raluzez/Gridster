import { isEqualPositions } from './isEqualPositions';

function Square(position) {
  this.position = position;
  this.neighbors = [
    [this.position[0] - 1, this.position[1]],
    [this.position[0] + 1, this.position[1]],
    [this.position[0], this.position[1] - 1],
    [this.position[0], this.position[1] + 1],
  ];
  this.isSearched = false;
  this.parent = null;
}

export const customBFS = (clearSquaresList, start, end, position, isClear) => {
  const endSquare = new Square(end);
  const startSquare = new Square(start);
  isClear
    ? (clearSquaresList = [...clearSquaresList, position, end])
    : (clearSquaresList = [
        ...clearSquaresList.filter(square => !isEqualPositions(square, position)),
        end,
      ]);
  const clearSquares = clearSquaresList.map(position => new Square(position));
  let queue = [];
  const path = [];

  startSquare.isSearched = true;
  queue.push(startSquare);

  while (queue.length) {
    const currentSquare = queue.shift();
    if (isEqualPositions(currentSquare.position, endSquare.position)) {
      path.push(currentSquare.position);
      let next = currentSquare.parent;
      while (next) {
        path.push(next.position);
        next = next.parent;
      }
      break;
    } else {
      currentSquare.neighbors.map(neighborPosition => {
        const clearNeighbor = clearSquares.find(
          square => !square.isSearched && isEqualPositions(square.position, neighborPosition)
        );
        clearNeighbor &&
          (queue.push(clearNeighbor),
          (clearNeighbor.isSearched = true),
          (clearNeighbor.parent = currentSquare));
      });
    }
  }
  return path;
};
