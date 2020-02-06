import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Styled-Componets
const Span2SC = styled.div`
    /* border: 1px solid red; */
    @media ${MQ.md} {
        grid-column-start: 1 span;
    }
`;

function Span1(props) {
    const {children}= props;
    return(
        <Span2SC>
            {children}
        </Span2SC>
    )
}

export default Span1;