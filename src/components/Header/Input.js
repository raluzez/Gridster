import styled from 'styled-components';

export default styled.input`
  width: 28px;
  padding: 6.5px 20px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 20px;
  &&:focus {
    outline: none;
  }
  &&::placeholder {
    color: black;
  }
  @media (max-width: 520px) {
    width: 22px;
    padding: 6px 15px;
    font-size: 16px;
  }
`;
