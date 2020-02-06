import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

const ContainerCS = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;
const DivChildren = styled.div`
    width: 80%;
    /* border: 1px solid red; */
    
`;

function ContainerHeaderML(props) {
    const {children} = props;
    return(
        <ContainerCS>
            <DivChildren>{children}</DivChildren>
        </ContainerCS>
    )
}

export default ContainerHeaderML;