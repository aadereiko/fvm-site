import React from 'react';
import styled from 'styled-components';

const ImageElement = styled.div`
  width: ${props => props.width || ''};
  height: ${props => props.height || ''};
  padding: 19px 40px;
  
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 

  border-radius: 20px;
  position: relative;

  background: url(${props => props.bgImage || 'unset'}) no-repeat;

  display: flex;
  align-items: flex-end;
`;

export const Image = (props) => {
    return (
      <ImageElement {...props}>
        {props.children}
     </ImageElement>
  );
};
