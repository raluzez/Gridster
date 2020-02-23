import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  border-radius: 6px;
  margin-bottom: 50px;
`
const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  &&:first-child {
    margin-left: 25px;
  }
`
const Label = styled.label`
  font-size: 14px;
  color: #949494;
`
const Input = styled.input`
  width: 30px;
  padding: 7px 15px;
  border: 1px solid #BBB;
  border-radius: 4px;
  font-size: 18px;
  &&:focus {
    outline: none;
  }
  &&::placeholder {
    color: black;
  }
`
const X = styled.div`
  margin: auto 0;
  position: relative;
  top: 8px;
`

const GenerateButton = styled.button`
    margin: auto 0;
    position: relative;
    top: 8px;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    background-color: #4A90E2;
    color: white;
    &&:hover {
        background-color: #76B5FF;
    }
    &&:focus {
        outline: none;
    }
    &&:active {
        background-color: #235896;
        position: relative;
        top: 9px;
        left: 1px;
    }
`

const Header = () => {
  return (
    <HeaderContainer>
      <InputBlock>
        <Label for="Rows">Rows</Label>
        <Input placeholder='10'  max="20" name="Rows" />
      </InputBlock>
      <X>
        x
      </X>
      <InputBlock>
        <Label for="Columns">Columns</Label>
        <Input placeholder='10' max="20" name="Columns" />
      </InputBlock>
      <GenerateButton>
        Generate
      </GenerateButton>
    </HeaderContainer>
  )
}

export default Header
