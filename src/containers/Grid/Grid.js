import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Square from '../../components/Grid/Square';
import TargetSquare from '../../components/Grid/TargetSquare';
import PathSquare from '../../components/Grid/PathSquare';
import RowContainer from '../../components/Grid/RowContainer';
import { isEqualPositions } from '../../helpers/isEqualPositions';
import { fillSquare, clearSquare, findPath } from '../../store/actions/rootActions';
import { customBFS } from '../../helpers/customBFS';

const MemoSqaure = memo(Square);
const MemoTargetSquare = memo(TargetSquare);
const MemoPathSquare = memo(PathSquare);

const Grid = () => {
  const rows = useSelector(state => [...Array(state.rows)]);
  const columns = useSelector(state => [...Array(state.columns)]);
  const startPosition = useSelector(state => state.startSquare);
  const endPosition = useSelector(state => state.endSquare);
  const clearSquaresList = useSelector(state => state.clearSquaresList);
  const pathSquaresList = useSelector(state => state.pathArray);
  const dispatch = useDispatch();

  const squareTypeHandler = position =>
    clearSquaresList.find(clearSquare => isEqualPositions(clearSquare, position))
      ? 'clear'
      : 'filled';

  const squareToggler = (x, y) => {
    if (clearSquaresList.find(clearSquare => isEqualPositions(clearSquare, [x, y]))) {
      dispatch(fillSquare([x, y]));
      dispatch(findPath(customBFS(clearSquaresList, startPosition, endPosition, [x, y])));
    } else {
      dispatch(clearSquare([x, y]));
      dispatch(findPath(customBFS(clearSquaresList, startPosition, endPosition, [x, y], 'clear')));
    }
  };

  const squareComponentHandler = (x, y) => {
    let square;
    switch (true) {
      case isEqualPositions(startPosition, [x, y]):
        square = <MemoTargetSquare type="start" columns={columns.length} key={`${x}-${y}`} />;
        break;
      case isEqualPositions(endPosition, [x, y]):
        square = <MemoTargetSquare type="end" columns={columns.length} key={`${x}-${y}`} />;
        break;
      case !!pathSquaresList.find(pathSquare => isEqualPositions(pathSquare, [x, y])):
        square = (
          <MemoPathSquare
            columns={columns.length}
            key={`${x}-${y}`}
            onClick={() => squareToggler(x, y)}
          />
        );
        break;
      default:
        square = (
          <MemoSqaure
            key={`${x}-${y}`}
            columns={columns.length}
            type={squareTypeHandler([x, y])}
            onClick={() => squareToggler(x, y)}
          />
        );
    }
    return square;
  };

  return rows.map((item, rowIndex) => (
    <RowContainer key={rowIndex}>
      {columns.map((item, columnIndex) => squareComponentHandler(columnIndex, rowIndex))}
    </RowContainer>
  ));
};

export default Grid;
