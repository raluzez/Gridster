import React from 'react';
import styled from 'styled-components'

const Grid = () => {
    const columns = 20
    const rows = 20

    const Square = styled.div`
        width: ${() => `calc( 30vw / ${columns})` };
        border: 1px solid #E2E2E2;
        height: ${() => `calc( 30vw / ${columns})` };
        background-color:#F1F1F1;
        &&:hover{
            background-color:#F8F8F8;
        }
        &&:active{
            background-color:#E2E2E2;
        }
    `
    return [...Array(rows)].map((item,rowIndex)=>
            <div key={rowIndex} style={{display:'flex', margin:'auto'}}>
                {[...Array(columns)].map((item, columnIndex)=>
                <Square key={columnIndex} column={columnIndex} row={rowIndex}></Square>)}
            </div>)
}

export default Grid;
