import * as actionTypes from './actionTypes';

export const generateGrid = (rows, columns) => ({
  type: actionTypes.GENERATE_GRID,
  rows,
  columns,
});

export const fillSquare = position => ({
  type: actionTypes.FILL_SQUARE,
  position,
});

export const clearSquare = position => ({
  type: actionTypes.CLEAR_SQUARE,
  position,
});

export const findPath = pathArray => ({
  type: actionTypes.FIND_PATH,
  pathArray,
});
