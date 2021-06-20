import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transform: ${props => props.hide ? `translate(0%,-100%)` : ''};
  transition: all 0.3s ease-in-out;
`;

export const UlNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 40px auto 0;
  padding: 0;
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
    font-size: 10px;
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