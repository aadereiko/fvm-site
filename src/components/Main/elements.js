import styled from 'styled-components';

export const PageHeader = styled.div`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 90px;
  margin: 170px 0 70px;
`;

export const Page = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const PageWrapper = styled.div`
  background-color: #000000;
  padding-left: 115px;
  min-width: 1280px;
  color: #ffffff;
  background: url(${props => props.bgImage || 'unset'}) no-repeat;
  min-height: ${props => props.height || 'unset'};
  position: relative;
  
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 
`;

export const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'unset'};
  align-items: ${props => props.align || 'unset'};
`;

export const Text = styled.div`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  max-width: ${props => props.width};
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 

  h1 {
    font-size: 25px;
    line-height: 20px;
    font-weight: 400;
    margin: 0;
  }

  p {
    font-size: 15px;
    line-height: 30px;
    padding-top: ${props => props.paddingBefforeText || 0};
    padding-bottom: ${props => props.paddingAffterText || 0};
    margin: 0;
  }

  ul {
    list-style:none;
    padding: 0;
    line-height: 25px;
    font-size: 15px;
    padding-bottom: ${props => props.paddingUl || '30px'};
    margin: 0;

    li {
      margin-bottom: 15px;
      
      &:last-child{
        margin-bottom: 0;
      }
    }

  }

`;

export const Container = styled.div`
  max-width: ${props => props.width || 'unset'}; 
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 
  padding-top: ${props => props.paddingTop || 0}; 
  padding-left: ${props => props.paddingLeft || 0}; 
  padding-right: ${props => props.paddingRight || 0}; 
  padding-bottom: ${props => props.paddingBottom || 0}; 
  ${props => props.border ? 
    `border-bottom: 0.5px solid #4F4F4F; ` : null
  }
`;

export const Description = styled.div`
  margin-top: ${props => props.marginTop || 0}; 
  margin-left: ${props => props.marginLeft || 0}; 
  margin-right: ${props => props.marginRight || 0}; 
  margin-bottom: ${props => props.marginBottom || 0}; 

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    margin-top: 19px;
  }
  
`;
