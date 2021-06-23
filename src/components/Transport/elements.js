import styled from 'styled-components';

export const ImageDescription = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.isMobile ? '20px' : '68px'};
`;
