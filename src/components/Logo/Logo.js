import styled from 'styled-components';
import gridsterLogo from '../../assets/Gridster-Logo.png';

export default styled.img.attrs(() => ({
  src: `${gridsterLogo}`,
}))`
  width: 300px;
  height: 50px;
  margin: 50px 0;
  @media (max-width: 775px) {
    width: 200px;
    height: 35px;
    margin: 35px 0;
  }
`;
