import styled from 'styled-components';

export default styled.div`
  border: 1px solid #e2e2e2;
  background-color: ${props => (props.type === 'clear' ? '#FFFFFF' : '#F1F1F1')};
  width: ${props => `calc( 30vw / ${props.columns})`};
  height: ${props => `calc( 30vw / ${props.columns})`};
  &&:hover {
    background-color: #f8f8f8;
  }
  &&:active {
    background-color: #e2e2e2;
  }
  @media (max-width: 1270px) {
    width: ${props => `calc( 50vw / ${props.columns})`};
    height: ${props => `calc( 50vw / ${props.columns})`};
  }
  @media (max-width: 775px) {
    width: ${props => `calc( 75vw / ${props.columns})`};
    height: ${props => `calc( 75vw / ${props.columns})`};
  }
`;
