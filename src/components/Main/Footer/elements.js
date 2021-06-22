import styled from 'styled-components';

export const FooterDiv = styled.div`
`;

export const FooterWrapper = styled.div`
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;

export const UlNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 20px auto;
  justify-content: center;
  padding: 0;
`;

export const LiNav = styled.li`
  margin-right: 75px;
  color: #ffffff;

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
      color: #BA1629;
    }
  }
`;