import styled from 'styled-components';
import night from '../../assets/images/night.png';
import spring from '../../assets/images/spring.png';
import autumn from '../../assets/images/autumn.png';

export const SeasonsWrapper = styled.div`
  position: relative;
  margin-top: 187px;
  height: 2400px;
  color: #fff;
`;

export const NightBlock = styled.div`
  position: absolute;
  top: 231px;
  background: url(${night}) no-repeat;
  width: 1160px;
  height: 1300px;
`;

export const SpringBlock = styled.div`
  position: absolute;
  top: 1046px;
  right: 0;
  background: url(${spring}) no-repeat;
  width: 1044px;
  height: 1425px;
  margin-left: auto;
`;

export const AutumnBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: url(${autumn}) no-repeat;
  width: 1013px;
  height: 1225px;
  margin-left: auto;
`;