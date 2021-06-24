import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const ImagesWrapper = styled.div`
  height: 290px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const TextWrapper = styled.div`
  margin-top:auto;
`;

export const MobileTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.blockHeight || ''};
`;

export const MobileImage = styled.img`
  width:100%;
`;

export const StyledModalBody = styled(Modal.Body)`
  background: #000000;
  color: #ffffff;
`;

export const StyledModalHeader = styled(Modal.Header)`
  background: #000000;
  color: #ffffff;
  /* height: 30px; */
`;

export const StyledModalTitle = styled(Modal.Title)`
  color: #ffffff;
`;