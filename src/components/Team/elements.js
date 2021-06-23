import styled from 'styled-components';
import tg from '../../assets/images/tg.svg';
import vk from '../../assets/images/vk.svg';
import fb from '../../assets/images/fb.svg';

export const TeamWrapper = styled.div`
  display: flex;
`;

export const PersonContainer = styled.div`
  margin-right: ${props => props.margin ? '172px' : ''};
`;

export const Tg = styled.a`
  width: 20px;
  height: 20px;
  display: block;
  background: url(${tg});
  margin-right: 8px;
`;

export const Vk = styled.a`
  width: 20px;
  height: 20px;
  display: block;
  background: url(${vk});
  margin-right: 8px;
`;

export const Fb = styled.a`
  width: 20px;
  height: 20px;
  display: block;
  background: url(${fb});
`;

export const Links = styled.div`
  display: flex;
`;