import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Square from '../../components/Grid/Square';
import SpecialSquare from '../../components/Grid/SpecialSquare';
import RowContainer from '../../components/Grid/RowContainer';
import { isEqualPositions } from '../../helpers/isEqualPositions';
import { fillSquare, clearSquare } from '../../store/actions/rootActions';

const MemoSqaure = memo(Square);

const Grid = () => {
  const rows = useSelector(state => [...Array(state.rows)]);
  const columns = useSelector(state => [...Array(state.columns)]);
  const startPosition = useSelector(state => state.startSquare);
  const endPosition = useSelector(state => state.endSquare);
  const clearSquaresList = useSelector(state => state.clearSquaresList);
  const dispatch = useDispatch();

  const squareTypeHandler = position =>
    clearSquaresList.find(clearSquare =>
      isEqualPositions(clearSquare, position)
    )
      ? 'clear'
      : 'filled';

  const squareToggler = position =>
    clearSquaresList.find(clearSquare =>
      isEqualPositions(clearSquare, position)
    )
      ? dispatch(fillSquare(position))
      : dispatch(clearSquare(position));

  const isStartOrEnd = position =>
    isEqualPositions(startPosition, position) ||
    isEqualPositions(endPosition, position);

  const startOrEnd = position =>
    isEqualPositions(startPosition, position) ? (
      <SpecialSquare type="start" columns={columns.length} />
    ) : (
      <SpecialSquare type="end" columns={columns.length} />
    );

  return rows.map((item, rowIndex) => (
    <RowContainer key={rowIndex}>
      {columns.map((item, columnIndex) =>
        !isStartOrEnd([columnIndex, rowIndex]) ? (
          <MemoSqaure
            key={`${columnIndex}-${rowIndex}`}
            columns={columns.length}
            type={squareTypeHandler([columnIndex, rowIndex])}
            onClick={() => squareToggler([columnIndex, rowIndex])}
          />
        ) : (
          startOrEnd([columnIndex, rowIndex])
        )
      )}
    </RowContainer>
  ));
};

export default Grid;
