import React from 'react'
import styled from 'styled-components'
import gridsterLogo from '../../Assets/Gridster-Logo.png'

const Logo = styled.img`
  width: 300px;
  height: 50px;
  margin: 50px 0;
`
const LogoImg = () => <Logo src={gridsterLogo} />

export default LogoImg
