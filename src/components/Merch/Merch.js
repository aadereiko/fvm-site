import React from 'react';
import { Image, P, Button } from '../../helpers';
import { Row, Col, Container } from 'react-bootstrap';
import { FlexWrapper, ImagesContainer, Photo } from './elements'
import shoper from '../../assets/images/shoper.png';
import shirt from '../../assets/images/shirt.png';

export const Merch = ({isLaptop}) => {
  return (
    <>
    {isLaptop ? 
      <>
        <FlexWrapper>
          <Image isLaptop={isLaptop} bgImage={shoper} marginRight="32.5px" height="560px" width="840px"/>
          <ImagesContainer>
            <Image isLaptop={isLaptop} bgImage={shoper} height="180px" width="270px"/>
            <Image isLaptop={isLaptop} bgImage={shirt} marginTop="10px" height="180px" width="270px"/>
            <Image isLaptop={isLaptop} bgImage={shirt} marginTop="10px" height="180px" width="270px"/>
          </ImagesContainer>
        </FlexWrapper>
        <P marginTop="50px" weight="400" size="14px" height="17px">Чёрный шоппер «FOTOVELOMARAFON»</P>
        <FlexWrapper>
          <a href="https://www.instagram.com/fotovelomarafon/" target="__blank"><Button width="250px" size="14px" height="16px">Купить</Button></a>
        </FlexWrapper>
      </>
      :
      <>
        <Container>
          <Row>
            <Col xs={12}>
              <Photo isLaptop={isLaptop} src={shoper} height="200px" radius="20px"/>
            </Col>
            <Col xs={12}>
              <Photo marginTop="10px" isLaptop={isLaptop} src={shirt} height="200px" radius="20px"/>
            </Col>
          </Row>
          <a href="https://www.instagram.com/fotovelomarafon/" target="__blank">
            <Button marginLeft="auto" marginRight="auto" marginTop="10px" width="150px" size="14px" height="16px">Купить</Button>
          </a>
        </Container>
      </>
    }
      
    </>
  );
};
