import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  &&:first-child {
    margin-left: 25px;
  }
  @media (max-width: 520px) {
    margin: 15px;
    &&:first-child {
      margin-left: 20px;
    }
  }
  @media (max-width: 425px) {
    margin-top: ${props => (props.isError ? 0 : '15px')};
  }
`;
