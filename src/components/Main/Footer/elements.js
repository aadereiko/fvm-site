import styled from 'styled-components';

export const FooterDiv = styled.div`
`;

export const FooterWrapper = styled.div`
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;

export const UlNav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  ${props => props.isLaptop ? `
    margin: 20px auto;
    justify-content: center;
  ` : `
    flex-direction: column;
    align-items: center;
  `}
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