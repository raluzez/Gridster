import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateGrid } from '../../store/actions/rootActions';
import HeaderContainer from '../../components/Header/Container';
import InputBlock from '../../components/Header/InputBlock';
import Label from '../../components/Header/Label';
import Input from '../../components/Header/Input';
import Separator from '../../components/Header/Separator';
import GenerateButton from '../../components/Header/GenerateButton';

const Header = () => {
  const [currentRows, setCurrentRows] = useState(10);
  const [currentColumns, setCurrentColumns] = useState(10);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <InputBlock>
        <Label htmlFor="Rows">Rows</Label>
        <Input
          value={currentRows}
          name="Rows"
          onChange={e => {
            const isNumber = +e.target.value;
            if (isNumber || e.target.value === '') {
              setCurrentRows(e.target.value);
            }
          }}
        />
      </InputBlock>
      <Separator>x</Separator>
      <InputBlock>
        <Label htmlFor="Columns">Columns</Label>
        <Input
          value={currentColumns}
          name="Columns"
          onChange={e => setCurrentColumns(+e.target.value)}
        />
      </InputBlock>
      <GenerateButton onClick={() => dispatch(generateGrid(+currentRows, +currentColumns))}>
        Generate
      </GenerateButton>
    </HeaderContainer>
  );
};

export default Header;
