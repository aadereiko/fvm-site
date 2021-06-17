import React from 'react';
import styled from 'styled-components';

const MarginElement = styled.div`
    margin-top: ${props => props.marginTop || 0}; 
    margin-left: ${props => props.marginLeft || 0}; 
    margin-right: ${props => props.marginRight || 0}; 
    margin-bottom: ${props => props.marginBottom || 0}; 
    min-width: ${props => props.minWidth || 'unset'};  
    max-width: ${props => props.maxWidth || 'unset'};  
`

export const Margin = (props) => {
    return (
        <MarginElement {...props}>
            {props.children}
        </MarginElement>
    );
};
