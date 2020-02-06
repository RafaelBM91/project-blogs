import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';
//Mango-Library
import Container from '../layout/container';


const ContainerFormSC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        @media ${MQ.sm} {
            width: 85%;
        }
        @media ${MQ.md} {
            width: ${props => props.width};
        }
        
    }
`;
const ContainerTitleSC = styled.div`
    margin-bottom: 50px;
`; 
function FormContainer1(props) {
    const {children, bgImgM, bgImgD, title, width, bgColor} = props;
    return(
        <Container bgImgM={bgImgM} bgImgD={bgImgD} bgColor={bgColor}>
            <ContainerTitleSC>{title}</ContainerTitleSC>
            <ContainerFormSC  width={width||"70%"}>
                <div>
                    {children}
                </div>
            </ContainerFormSC>
        </Container>
    )
}
export default FormContainer1;