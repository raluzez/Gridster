import styled from 'styled-components';

export default styled.div`
  border: 1px solid;
  background-color: ${props =>
    props.type === 'start' ? '#7ED321' : '#639530'};
  border-color: ${props => (props.type === 'start' ? '#7ED321' : '#639530')};
  width: ${props => `calc( 30vw / ${props.columns})`};
  height: ${props => `calc( 30vw / ${props.columns})`};
`;
