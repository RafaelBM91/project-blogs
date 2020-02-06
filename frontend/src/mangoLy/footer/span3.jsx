import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Styled-Componets
const Span4SC = styled.div`
    /* border: 1px solid blue; */
    @media ${MQ.md} {
        grid-column-start: 3 span;
    }
`;

function Span3(props) {
    const {children}= props;
    return(
        <Span4SC>
            {children}
        </Span4SC>
    )
}

export default Span3;