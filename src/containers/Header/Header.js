import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateGrid } from '../../store/actions/rootActions'

import HeaderContainer from '../../components/Header/Container'
import InputBlock from '../../components/Header/InputBlock'
import Label from '../../components/Header/Label'
import Input from '../../components/Header/Input'
import XSign from '../../components/Header/XSign'
import GenerateButton from '../../components/Header/GenerateButton'

const Header = () => {
  const [currentRows, setCurrentRows] = useState(10)
  const [currentColumns, setCurrentColumns] = useState(10)
  const dispatch = useDispatch()

  return (
    <HeaderContainer>
      <InputBlock>
        <Label htmlFor="Rows">Rows</Label>
        <Input
          value={currentRows}
          max="20"
          name="Rows"
          onChange={e => {
            const isNumber = Number(e.target.value)
            if (isNumber || e.target.value === '') {
              setCurrentRows(e.target.value)
            }
          }}
        />
      </InputBlock>
      <XSign>x</XSign>
      <InputBlock>
        <Label htmlFor="Columns">Columns</Label>
        <Input
          value={currentColumns}
          max="20"
          name="Columns"
          onChange={e => setCurrentColumns(e.target.value)}
        />
      </InputBlock>
      <GenerateButton
        onClick={() => {
          dispatch(generateGrid(currentRows, currentColumns))
          console.log('CLICK')
        }}>
        Generate
      </GenerateButton>
    </HeaderContainer>
  )
}

export default Header
