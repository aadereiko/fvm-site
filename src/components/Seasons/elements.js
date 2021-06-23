import styled from 'styled-components';
import night from '../../assets/images/night.png';
import spring from '../../assets/images/spring.png';
import autumn from '../../assets/images/autumn.png';
import nightHover from '../../assets/images/night-hover.png';
import springHover from '../../assets/images/spring-hover.png';
import autumnHover from '../../assets/images/autumn-hover.png';

export const SeasonsWrapper = styled.div`
  position: relative;
  margin-top: 187px;
  height: 1200px;
  color: #fff;
`;

const Season = styled.div`
  position: absolute;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  p {
    opacity: 0;
  }
`;

export const NightBlock = styled(Season)`
  top: 90px;
  left: 0;
  background: url(${night}) no-repeat;
  width: 628px;
  height: 670px;
  
  &:hover {
    background: url(${nightHover}) no-repeat;

    p {
      opacity: 1;
    }
  }
`;

export const SpringBlock = styled(Season)`
  top: 500px;
  right: 0;
  background: url(${spring}) no-repeat;
  width: 702px;
  height: 692px;
  margin-left: auto;
  
  &:hover {
    background: url(${springHover}) no-repeat;

    p {
      opacity: 1;
    }
  }
`;

export const AutumnBlock = styled(Season)`
  top: 0;
  right: 79px;
  background: url(${autumn}) no-repeat;
  width: 616px;
  height: 595px;
  margin-left: auto;
  
  &:hover {
    background: url(${autumnHover}) no-repeat;

    p {
      opacity: 1;
    }
  }
`;

export const InfoBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`