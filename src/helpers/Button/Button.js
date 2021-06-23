import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.div`
  width: ${props => props.width || ''};
  padding: ${props => props.contact ? "8px 13px" : "12px 34px"};
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 

  font-size: ${props => props.size || '10px'}; 
  font-weight: ${props => props.weight || 400};
  font-family: ${props => props.family || 'Montserrat'}, sans-serif;  
  line-height: ${props => props.height || '12px'};  
  color: ${props => props.color || '#ffffff'};
  text-decoration: ${props => props.decoration || ''};
  text-transform: ${props => props.transform || ''};
  text-align: ${props => props.align || ''};
  letter-spacing: ${props => props.space || ''};

  border-radius: 188px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-sizing: border-box;
    background: linear-gradient(267.86deg, #3443CD -38.73%, #E02323 144.05%);
    background-clip: padding-box;
    /* border: solid 2px transparent; */
  }

  ${props => props.gradient ? `
    box-sizing: border-box;
    background: linear-gradient(270deg, rgba(32, 50, 218, 0) 0%, rgba(101, 35, 140, 0.21) 48.13%, #AF1238 100%);
    background-clip: padding-box;
    border: solid 2px transparent;
    ` : `
    background: #3443CD;
    // border: 2px solid #3443CD;
  `}
`;

export const Button = (props) => {
    return (
      <ButtonElement {...props}>
        {props.children}
     </ButtonElement>
  );
};
