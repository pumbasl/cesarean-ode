import React from 'react';
import { Container } from 'react-bootstrap';

export default function Wrapper({ children }){
    return(
        <Container>
            {children}
        </Container>
    );
}