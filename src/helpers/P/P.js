import React from 'react';
import styled from 'styled-components';

const PElement = styled.p`
  max-width: ${props => props.width || ''};
  padding-top: ${props => props.paddingTop || 0}; 
  padding-left: ${props => props.paddingLeft || 0}; 
  padding-right: ${props => props.paddingRight || 0}; 
  padding-bottom: ${props => props.paddingBottom || 0}; 
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 
  font-size: ${props => props.size || '15px'}; 
  font-weight: ${props => props.weight || 300};
  font-family: ${props => props.family || 'Montserrat'}, sans-serif;  
  line-height: ${props => props.height || '30px'};  
  color: ${props => props.color || ''};
  text-decoration: ${props => props.decoration || ''};
  text-transform: ${props => props.transform || ''};
  text-align: ${props => props.align || ''};
  letter-spacing: ${props => props.space || ''};
  ${props => props.gradient && `
    // background: linear-gradient(225deg, #89DD65 0%, #AEDD65 100%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    color: #89DD65;
  `}
  height: ${props => props.blockHeight || ''};
  li {
    margin-top: 5px;
  }
`;

export const P = (props) => {
    return (
      <PElement {...props}>
        {props.children}
     </PElement>
  );
};
