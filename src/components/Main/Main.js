import React from 'react';
import { Container } from 'react-bootstrap'

import { Header } from './Header';
import { PageWrapper } from './elements';
import { Description } from '../Description';
import { Transport } from '../Transport';
import { Seasons } from '../Seasons';
import { Merch } from '../Merch';
import { Team } from '../Team';
import { FAQ } from '../FAQ';
import { Gallery } from '../Gallery';
import { P, Button } from '../../helpers';
import bg from '../../assets/images/screen.png';

export const Main = () => {
  return (
    <>
    <Header/>
    <Container>
      <PageWrapper bgImage={bg} height="720px">
        <P paddingTop="157px" weight="600" size="80px" height="80px" width="404px">Время проявить себя</P>
        <P marginTop="12px" weight="400" size="16px" height="19px">26-27 июня</P>
        <Button marginTop="93px" width="137px">Регистрация</Button>
        <Button marginTop="14px" marginBottom="240px" gradient={true} width="258px">5 дней, 15 часов, 12 минут, 40 секунд</Button>
      </PageWrapper>
      <PageWrapper marginTop="30px">
        <Description/>
      </PageWrapper>
      <Seasons/>
      <PageWrapper>
        <P marginBottom="80px" marginLeft="40px" weight="600" size="34px" height="42px">На чём можно участвовать</P>
        <Transport/>
      </PageWrapper>
      <PageWrapper>
        <P marginBottom="100px" marginLeft="40px" weight="600" size="34px" height="42px">Мерч</P>
        <Merch/>
      </PageWrapper>
      <PageWrapper marginTop="140px">
        <P marginBottom="100px" marginLeft="40px" weight="600" size="34px" height="42px">Наша команда</P>
        <Team/>
      </PageWrapper>
      <PageWrapper marginTop="176px">
        <P marginBottom="100px" marginLeft="40px" weight="600" size="34px" height="42px">У нас часто спрашивают</P>
        <FAQ/>
      </PageWrapper>
      <PageWrapper marginTop="176px">
        <Gallery/>
      </PageWrapper>
    </Container>
    </>
  );
};
