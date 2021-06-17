import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.div`
  max-width: ${props => props.width || ''};
  padding: 19px 40px;
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 
  font-size: ${props => props.size || '18px'}; 
  font-weight: ${props => props.weight || 600};
  font-family: ${props => props.family || 'Montserrat'}, sans-serif;  
  line-height: ${props => props.height || '22px'};  
  color: ${props => props.color || '#ffffff'};
  text-decoration: ${props => props.decoration || ''};
  text-transform: ${props => props.transform || ''};
  text-align: ${props => props.align || ''};
  letter-spacing: ${props => props.space || ''};
  border-radius: 188px;
  position: relative;
  ${props => props.gradient ? `
  box-sizing: border-box;
  background: linear-gradient(270deg, rgba(32, 50, 218, 0) 0%, rgba(101, 35, 140, 0.21) 48.13%, #AF1238 100%);
  background-clip: padding-box;
  border: solid 2px transparent;
  ` : `
  background: #3443CD;
  border: 2px solid #3443CD;
  `}
`;

export const Button = (props) => {
    return (
      <ButtonElement {...props}>
        {props.children}
     </ButtonElement>
  );
};
