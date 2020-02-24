import * as actionTypes from '../actions/actionTypes'
import { isEqualPositions } from '../../helpers/isEqualPositions'

const initialState = {
  columns: 10,
  rows: 10,
  clearSquaresList: [
    [1, 1],
    [0, 1],
    [4, 4],
  ],
  selected: [{ x: 1, y: 2, uuid: 'qwe-1x2' }],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_GRID:
      return {
        ...state,
        rows: +action.rows,
        columns: +action.columns,
      }
    case actionTypes.CLEAR_SQUARE:
      console.log({ pos: action.position })
      const [x, y] = action.position
      console.log({ x, y })
      return {
        ...state,
        clearSquaresList: [...state.clearSquaresList, action.position],
      }
    case actionTypes.FILL_SQUARE:
      return {
        ...state,
        clearSquaresList: state.clearSquaresList.filter(
          position => !isEqualPositions(position, action.position)
        ),
      }
    default:
      return state
  }
}

export default reducer
