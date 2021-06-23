import React from 'react';
import styled from 'styled-components';

const ImageElement = styled.div`
  width: ${props => props.width || ''};
  height: ${props => props.height || ''};
  padding: ${props => props.isLaptop ? '19px 40px' : ''} ;
  
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 

  border-radius: ${props => props.isLaptop ? `${props.radius || '20px'}` : `${props.radius || '5px'}` } ;
  position: relative;

  background: url(${props => props.bgImage || 'unset'}) no-repeat;
  background-size: ${props => props.contain ? 'contain' : 'cover'};
  display: flex;
  align-items: flex-end;
  justify-content: ${props => !props.isLaptop ? 'center' : ''};

  transition: all 0.2s ease-in-out;
`;

export const Image = (props) => {
    return (
      <ImageElement {...props}>
        {props.children}
     </ImageElement>
  );
};