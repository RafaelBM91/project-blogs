import React from 'react';
import styled from 'styled-components';

const InputContainerSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 30px;
    border: 2px solid ${props => props.color};
    input {
        width: 100%;
        border: none;
        outline: none;
        padding: 0 10px;
        color: ${props => props.color};
    }
`;

function InputContainer1({children, color}) {
    return(
        <InputContainerSC color={color||"#525f7f"}>
            {children}
        </InputContainerSC>
    )
}

export default InputContainer1;