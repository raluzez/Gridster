import styled from 'styled-components';

export default styled.div`
  width: 100%;
  padding: 25px;
  padding-bottom: 0;
  font-size: 16px;
  color: #f57899;
  @media (max-width: 520px) {
    padding: 20px;
    padding-bottom: 0;
    font-size: 14px;
  }
  @media (max-width: 419px) {
    padding: 15px;
    padding-bottom: 0;
    font-size: 12px;
    height: 15px;
    text-align: center;
  }
`;
