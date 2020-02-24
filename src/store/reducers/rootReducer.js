import * as actionTypes from '../actions/actionTypes';
import { isEqualPositions } from '../../helpers/isEqualPositions';

const initialState = {
  columns: 10,
  rows: 10,
  pathArray: [],
  clearSquaresList: [],
  startSquare: [0, Math.floor(Math.random() * 10)],
  endSquare: [9, Math.floor(Math.random() * 10)],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_GRID:
      return {
        ...state,
        rows: action.rows,
        columns: action.columns,
        clearSquaresList: [],
        startSquare: [0, Math.floor(Math.random() * action.rows)],
        endSquare: [action.columns - 1, Math.floor(Math.random() * action.rows)],
        pathArray: [],
      };
    case actionTypes.CLEAR_SQUARE:
      return {
        ...state,
        clearSquaresList: [...state.clearSquaresList, action.position],
      };
    case actionTypes.FILL_SQUARE:
      return {
        ...state,
        clearSquaresList: state.clearSquaresList.filter(
          position => !isEqualPositions(position, action.position)
        ),
      };
    case actionTypes.FIND_PATH:
      return {
        ...state,
        pathArray: action.pathArray,
      };
    default:
      return state;
  }
};

export default reducer;
