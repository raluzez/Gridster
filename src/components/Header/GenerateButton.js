import styled from 'styled-components';

export default styled.button`
  margin: auto 10px;
  margin-right: 25px;
  position: relative;
  top: 9px;
  border: none;
  padding: 9px 18px;
  border-radius: 4px;
  background-color: #4a90e2;
  color: white;
  font-size: 17px;
  height: 38px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  &&:hover {
    background-color: #76b5ff;
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
  @media (max-width: 520px) {
    margin-right: 20px;
    padding: 7.5px 14px;
    font-size: 15px;
    height: 34px;
  }
  @media (max-width: 419px) {
    margin-top: -24px;
  }
`;
