import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Square from '../../components/Grid/Square';
import SpecialSquare from '../../components/Grid/SpecialSquare';
import PathSquare from '../../components/Grid/PathSquare';
import RowContainer from '../../components/Grid/RowContainer';
import { isEqualPositions } from '../../helpers/isEqualPositions';
import { fillSquare, clearSquare, findPath } from '../../store/actions/rootActions';
import { customBFS } from '../../helpers/customPathFinder';

const MemoSqaure = memo(Square);
const MemoSpecialSquare = memo(SpecialSquare);
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

  const squareToggler = position =>
    clearSquaresList.find(clearSquare => isEqualPositions(clearSquare, position))
      ? dispatch(fillSquare(position))
      : dispatch(clearSquare(position));

  const squareComponentHandler = position => {
    let square;
    switch (true) {
      case isEqualPositions(startPosition, position):
        square = (
          <MemoSpecialSquare
            type="start"
            columns={columns.length}
            key={`${position[0]}-${position[1]}`}
          />
        );
        break;
      case isEqualPositions(endPosition, position):
        square = (
          <MemoSpecialSquare
            type="end"
            columns={columns.length}
            key={`${position[0]}-${position[1]}`}
          />
        );
        break;
      case !!pathSquaresList.find(pathSquare => isEqualPositions(pathSquare, position)):
        square = <MemoPathSquare columns={columns.length} key={`${position[0]}-${position[1]}`} />;
        break;
      default:
        square = (
          <MemoSqaure
            key={`${position[0]}-${position[1]}`}
            columns={columns.length}
            type={squareTypeHandler([position[0], position[1]])}
            onClick={() => {
              squareToggler([position[0], position[1]]);
              dispatch(
                findPath(
                  customBFS(clearSquaresList, startPosition, endPosition, [
                    position[0],
                    position[1],
                  ])
                )
              );
            }}
          />
        );
    }
    return square;
  };

  return rows.map((item, rowIndex) => (
    <RowContainer key={rowIndex}>
      {columns.map((item, columnIndex) => squareComponentHandler([columnIndex, rowIndex]))}
    </RowContainer>
  ));
};

export default Grid;
