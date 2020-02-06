import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Mango-Library
import ContainerML from '../layout/container';
import Span1 from './span1';
import Span2 from './span2';
import Span3 from './span3';
import Span4 from './span4';
import Span12 from './span12';

const ContainerSC = styled.div`
    min-height: ${props=>props.no100vh ?"auto":"80vh"};
`;
const FooterContainerSC = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5vh 20px;
    @media ${MQ.md} {
        grid-gap: 10vh 20px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto 1fr;
    }
`;
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid yellowgreen; */
    @media ${MQ.md} {
        grid-column: 1/6;
        grid-row: 1/2;
    }
`;
function FooterML1(props) {
    const {children, bgImgM, bgImgD, title, no100vh, bgColor} = props;
    return(
        <ContainerML bgImgM={bgImgM} bgImgD={bgImgD} no100vh={no100vh} bgColor={bgColor}>
            <ContainerSC no100vh={no100vh||false}>
                <Title>{title?title:null}</Title>
                <FooterContainerSC>
                    {children}
                </FooterContainerSC>
            </ContainerSC>
        </ContainerML>
    )
}
FooterML1.span1 = Span1;
FooterML1.span2 = Span2;
FooterML1.span3 = Span3;
FooterML1.span4 = Span4;
FooterML1.span12 = Span12;
export default FooterML1;