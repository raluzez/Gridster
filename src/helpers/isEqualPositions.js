export const isEqualPositions = (position, currentPostion) => {
  const [x, y] = position;
  const [currentX, currentY] = currentPostion;
  return currentX === x && currentY === y;
};
