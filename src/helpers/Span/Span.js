import React from 'react';
import styled from 'styled-components';

const SpanElement = styled.span`
  padding-top: ${props => props.paddingTop || 0}; 
  padding-left: ${props => props.paddingLeft || 0}; 
  padding-right: ${props => props.paddingRight || 0}; 
  padding-bottom: ${props => props.paddingBottom || 0}; 
  font-size: ${props => props.size || '15px'}; 
  font-weight: ${props => props.weight || 400};
  font-family: ${props => props.family || 'Montserrat'}, sans-serif;  
  line-height: ${props => props.height || '30px'};  
  color: ${props => props.color || 'unset'};
`;

export const Span = (props) => {
  
  return (
    <SpanElement {...props}>
      {props.children}
    </SpanElement>
  );
};
