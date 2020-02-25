import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateGrid } from '../../store/actions/rootActions';
import HeaderContainer from '../../components/Header/Container';
import InputBlock from '../../components/Header/InputBlock';
import Label from '../../components/Header/Label';
import Input from '../../components/Header/Input';
import Separator from '../../components/Header/Separator';
import GenerateButton from '../../components/Header/GenerateButton';
import Error from '../../components/Header/Error';

const Header = () => {
  const [currentRows, setCurrentRows] = useState(10);
  const [currentColumns, setCurrentColumns] = useState(10);
  const dispatch = useDispatch();

  const isInputOverMax = () => currentRows > 20 || currentColumns > 20;

  return (
    <>
      <HeaderContainer>
        {isInputOverMax() && <Error>Max Value Is 20 !</Error>}
        <InputBlock isError={isInputOverMax()}>
          <Label htmlFor="Rows">Rows</Label>
          <Input
            value={currentRows}
            name="Rows"
            onChange={e => {
              const isNumber = +e.target.value;
              (isNumber || e.target.value === '') && setCurrentRows(e.target.value);
            }}
          />
        </InputBlock>
        <Separator>x</Separator>
        <InputBlock isError={isInputOverMax()}>
          <Label htmlFor="Columns">Columns</Label>
          <Input
            value={currentColumns}
            name="Columns"
            onChange={e => {
              const isNumber = +e.target.value;
              (isNumber || e.target.value === '') && setCurrentColumns(+e.target.value);
            }}
          />
        </InputBlock>
        <GenerateButton
          onClick={() => dispatch(generateGrid(+currentRows, +currentColumns))}
          disabled={isInputOverMax()}>
          Generate
        </GenerateButton>
      </HeaderContainer>
    </>
  );
};

export default Header;
