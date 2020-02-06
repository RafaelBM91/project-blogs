import React from 'react';
import styled from 'styled-components';

const Container1 = styled.div`
    /* border: 1px solid green; */
    width: 33.3%;
`;
const SlyderCard = ({children}) => {
    return (  
        <Container1>
            {children}
        </Container1>
    );
}
 
export default SlyderCard;