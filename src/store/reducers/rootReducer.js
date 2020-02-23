import * as actionTypes from '../actions/actionTypes'

const initialState = {
  columns: 10,
  rows: 10,
  clearSquaresList: [[1,1],[0,1],[4,4]]
}

const compareArrays = (arrayA, arrayB) => (
  JSON.stringify(arrayA) === JSON.stringify(arrayB)
)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_GRID:
      return {
        ...state,
        rows: Number(action.rows),
        columns: Number(action.columns)
      }
    case actionTypes.CLEAR_SQUARE:
      return {
        ...state,
        clearSquaresList: state.clearSquaresList.concat([action.position])
      }
    case actionTypes.FILL_SQUARE:
      return {
        ...state,
        clearSquaresList: state.clearSquaresList.filter(square => !compareArrays(square, action.position))
      }
    default: return state
  }
}

export default reducer
