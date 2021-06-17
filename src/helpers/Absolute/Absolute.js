import React from 'react';
import styled from 'styled-components';

const AbsoluteElement = styled.div`
  position: absolute;
  top: ${props => props.top || ''};
  left: ${props => props.left || ''};
  right: ${props => props.right || ''};
  bottom: ${props => props.bottom || ''};
`

export const Absolute = (props) => {
  return (
    <AbsoluteElement {...props}>
      {props.children}
    </AbsoluteElement>
  );
};
