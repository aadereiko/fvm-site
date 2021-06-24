import styled from 'styled-components';

import tg from '../../../assets/images/telegram.svg';
import insta from '../../../assets/images/insta.svg';
import vk from '../../../assets/images/vk-2.svg';
import youtube from '../../../assets/images/youtube.svg';
import fb from '../../../assets/images/facebook.svg';

export const FooterDiv = styled.div`
`;

export const FooterWrapper = styled.div`
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  margin-top: ${props => !props.isLaptop ? "40px" : ''}
`;

export const UlNav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin: 20px auto;
  justify-content: center;
`;

export const LiNav = styled.li`
  ${props => props.isLaptop ? `
      margin-right: 75px;

      &:last-child {
        margin-right: 0;
      }
  ` : `
    margin-top: 5px;
  `}
  color: #ffffff;

  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 12px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #BA1629;
    }
  }
`;

export const Tg = styled.div`
  background: url(${tg}) no-repeat;
  width: 30px;
  height: 30px;
  background-size: contain;
  margin: 0 10px;
`;

export const Inst = styled.div`
  background: url(${insta}) no-repeat;
  width: 30px;
  height: 30px;
  background-size: contain;
  margin: 0 10px;
`;

export const Vk = styled.div`
  background: url(${vk}) no-repeat;
  width: 30px;
  height: 30px;
  background-size: contain;
  margin: 0 10px;
`;

export const Fb = styled.div`
  background: url(${fb}) no-repeat;
  width: 30px;
  height: 30px;
  background-size: contain;
  margin: 0 10px;
`;

export const YouTube = styled.div`
  background: url(${youtube}) no-repeat;
  width: 30px;
  height: 30px;
  background-size: contain;
  margin: 0 10px;
`;