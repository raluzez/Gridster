import styled from 'styled-components'

export default styled.input`
  width: 28px;
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