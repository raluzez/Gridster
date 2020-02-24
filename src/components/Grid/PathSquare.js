import styled from 'styled-components';

export default styled.div`
  border: 1px solid #e2e2e2;
  background-color: #f5a623;
  width: ${props => `calc( 30vw / ${props.columns})`};
  height: ${props => `calc( 30vw / ${props.columns})`};
`;
