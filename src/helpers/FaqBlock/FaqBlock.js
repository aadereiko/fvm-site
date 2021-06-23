import React, { useState } from 'react';
import styled from 'styled-components';
import { P } from '../P';
import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';

const FaqBlockElement = styled.div`
  padding: 12px 87px 12px 20px;
  border-radius: 20px;
  background: ${props => props.open ? 'linear-gradient(267.86deg, #3443CD -38.73%, #E02323 144.05%);' : '#3443CD'};
  position: relative;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: linear-gradient(267.86deg, #3443CD -38.73%, #E02323 144.05%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 16px;
    right: 16px;
    background: url(${props => props.open ? minus : plus});
    background-size: cover;
    width: 10px;
    height: 10px;
  }
`;

const FaqWrapper = styled.div`
  display: block;
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 
  transition: all 0.2s ease-in-out;
`;

export const FaqBlock = (props) => {
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
      e.preventDefault();
      setOpen(prevState => !prevState)
    }

    return (
      <FaqWrapper {...props}>
        <FaqBlockElement open={open} onClick={(e) => handleChange(e)}>
          <P weight="400" size={props.isMobile ? "12px" : "16px"} height="19px">{props.title}</P>
          {open && props.children}
      </FaqBlockElement>
      </FaqWrapper>
  );
};
