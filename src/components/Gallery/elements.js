import styled from 'styled-components';
import { Image } from '../../helpers';

export const ImagesWrapper = styled.div`
  height: 290px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const SwiperImage = styled(Image)`
  width: 568px;
  height: 413px;
  background-size: cover;

  ${props => props.isActive && `
    width: 826px;
    height: 619px;
    transform: translateX(-50%);
    left: 50%;
    z-index: 100;
  `}
  ${props => (props.isPrev || props.isNext) && `
    width: 568px;
    height: 413px;
  `}
`;