import styled from 'styled-components'

export default styled.button`
margin: auto 0;
position: relative;
top: 8px;
border: none;
padding: 9px 15px;
border-radius: 4px;
background-color: #4A90E2;
color: white;
font-size: 17px;
&&:hover {
    background-color: #76B5FF;
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
`