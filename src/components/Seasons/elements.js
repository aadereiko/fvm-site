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

const Season = styled.div`
  position: absolute;
`;

export const NightBlock = styled(Season)`
  top: 90px;
  left: 0;
  background: url(${night}) no-repeat;
  width: 628px;
  height: 670px;
  
  &:hover {
  background: url(${spring}) no-repeat;
  }
`;

export const SpringBlock = styled(Season)`
  top: 500px;
  right: 0;
  background: url(${spring}) no-repeat;
  width: 702px;
  height: 692px;
  margin-left: auto;
`;

export const AutumnBlock = styled(Season)`
  top: 0;
  right: 79px;
  background: url(${autumn}) no-repeat;
  width: 616px;
  height: 595px;
  margin-left: auto;
`;

export const InfoBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`