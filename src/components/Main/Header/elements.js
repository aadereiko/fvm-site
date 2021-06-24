import styled from 'styled-components';
import { Anchor } from 'antd';

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const AnchorElement = styled(Anchor)`
  transition: all 0.3s ease-in-out;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transform: ${props => props.hide ? `translate(0%,-100%)` : ''};
  transition: all 0.3s ease-in-out;
  background-color: ${props => props.colored ? "#000000" : ''};
`;

export const UlNav = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 20px auto;
  padding: 0;

  .ant-anchor-link-active {
      /* background: linear-gradient(225deg, #89DD65 0%, #AEDD65 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
      a {
        color: #3443CD;
      }
  }
`;

export const LiNav = styled.li`
  margin-right: 75px;
  color: #ffffff;

  /* ${props => props.colored ? `
    a {
      color: #89DD65;
    }
  ` : ''}; */

  &:last-child {
    margin-right: 0;
  }

  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 12px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      /* background: linear-gradient(225deg, #89DD65 0%, #AEDD65 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
      color: #BA1629;
    }
  }
`;