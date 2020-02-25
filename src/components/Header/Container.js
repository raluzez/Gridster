import styled from 'styled-components';

export default styled.div`
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  border-radius: 6px;
  margin-bottom: 50px;
  @media (max-width: 419px) {
    justify-content: space-around;
    height: 140px;
    margin-bottom: 30px;
  }
`;
