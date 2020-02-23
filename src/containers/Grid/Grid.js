import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Square from '../../components/Grid/Square'
import RowContainer from '../../components/Grid/RowContainer'
import { fillSquare, clearSquare } from '../../store/actions/rootActions'

const Grid = () => {
    const rows = useSelector(state => state.rows)
    const columns = useSelector(state => state.columns)
    const clearSquaresList = useSelector(state => state.clearSquaresList)
    const dispatch = useDispatch()

    console.log(clearSquaresList);

    const compareArrays = (arrayA, arrayB) => (
        JSON.stringify(arrayA) === JSON.stringify(arrayB)
    )
    
    const squareTypeHandler = position =>( 
        clearSquaresList.find( clearSquare => compareArrays(clearSquare, position))
        ? 'clear'
        : 'filled'
    )

    const squareToggler = position =>(
        clearSquaresList.find( clearSquare => compareArrays(clearSquare, position))
        ? dispatch(fillSquare(position))
        : dispatch(clearSquare(position))
    )
  
  return [...Array(rows)].map((item, rowIndex) => (
    <RowContainer key={rowIndex}>
      {[...Array(columns)].map((item, columnIndex) => (
        <Square 
            key={columnIndex} 
            columns={columns} 
            type={squareTypeHandler([columnIndex,rowIndex])}
            onClick={() => squareToggler([columnIndex,rowIndex])}/>
      ))}
    </RowContainer>
  ))
}

export default Grid
