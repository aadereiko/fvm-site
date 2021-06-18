import styled from 'styled-components';
import { Button } from '../../helpers';

export const FlexWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MoreButton = styled(Button)`
  background: none;
  color: #676767; 
  border: 2px solid #676767;
`;