import React, { useState } from 'react';
import styled from 'styled-components';
import { P } from '../P';
import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';

const FaqBlockElement = styled.div`
  padding: 26px 110px 26px 60px;
  border-radius: 40px;
  background: ${props => props.open ? 'linear-gradient(267.86deg, #3443CD -38.73%, #E02323 144.05%);' : '#3443CD'};
  position: relative;
  cursor: pointer;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    top: 30px;
    right: 32px;
    background: url(${props => props.open ? minus : plus}) no-repeat;
    width: 18px;
    height: 18px;
  }
`;

const FaqWrapper = styled.div`
  display: block;
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 
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
          <P weight="500" size="24px" height="30px">{props.title}</P>
          {open && props.children}
      </FaqBlockElement>
      </FaqWrapper>
  );
};
