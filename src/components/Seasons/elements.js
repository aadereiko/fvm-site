import styled from 'styled-components';
import night from '../../assets/images/night.png';
import spring from '../../assets/images/spring.png';
import autumn from '../../assets/images/autumn.png';

export const SeasonsWrapper = styled.div`
  position: relative;
  margin-top: 187px;
  height: 1200px;
  color: #fff;
`;

export const NightBlock = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  background: url(${night}) no-repeat;
  width: 628px;
  height: 670px;
`;

export const SpringBlock = styled.div`
  position: absolute;
  top: 500px;
  right: 0;
  background: url(${spring}) no-repeat;
  width: 702px;
  height: 692px;
  margin-left: auto;
`;

export const AutumnBlock = styled.div`
  position: absolute;
  top: 0;
  right: 79px;
  background: url(${autumn}) no-repeat;
  width: 616px;
  height: 595px;
  margin-left: auto;
`;