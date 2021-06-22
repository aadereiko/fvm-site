import styled from 'styled-components';
import { Image } from '../../helpers';

export const ImagesWrapper = styled.div`
  height: 830px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const SwiperImage = styled(Image)`
  width: 568px;
  height: 413px;
  background-size: cover;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  border-radius: 40px;

  ${props => props.isActive && `
    width: 826px;
    height: 619px;
    transform: translateX(-50%);
    left: 50%;
    z-index: 100;
    opacity: 1;
  `}

  ${props => (props.isPrev || props.isNext) && `
    width: 568px;
    height: 413px;
    opacity: 0.5;
  `}
`;