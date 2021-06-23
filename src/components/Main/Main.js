import React from 'react';
import { Container } from 'react-bootstrap'

import { Header } from './Header';
import { Footer } from './Footer';
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

const getTimeRemaining = () => {
  var t = Date.parse(new Date(2021,5,26,9)) - Date.parse(new Date());
  console.log(new Date(2021,5,26,9), new Date())
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

const getTimeName =(time, type) => {
  if(type === 'day') {
    if(time === 1) 
        return `${time} день`
    else if(time > 1 && time <5)
        return `${time} дня`
      else
          return `${time} дней`
  }
  if(type === 'hour') {
    if(time === 1) 
        return `${time} час`
    else if(time > 1 && time <5)
        return `${time} часа`
      else
          return `${time} часов`
  }
  if(type === 'minute') {
    if(time === 1) 
        return `${time} минута`
    else if(time > 1 && time <5)
        return `${time} минуты`
      else
          return `${time} минут`
  }
  if(type === 'seconds') {
    if(time === 1) 
        return `${time} секунда`
    else if(time > 1 && time <5)
        return `${time} секунды`
      else
          return `${time} секунд`
  }
}

export const Main = () => {
  const [counter, setCounter] = React.useState(getTimeRemaining());

  React.useEffect(() => {
    setTimeout(() => setCounter(getTimeRemaining()), 1000);
  }, [counter]);

  return (
    <>
    <Header/>
    <Container>
      <PageWrapper bgImage={bg} height="720px">
        <P paddingTop="157px" weight="600" size="80px" height="80px" width="404px">Время проявить себя</P>
        <P marginTop="12px" weight="400" size="16px" height="19px">26-27 июня</P>
        <a href="https://t.me/phvm_bot"><Button size="16px" height="18px" marginTop="93px" width="170px">Регистрация</Button></a>
        <Button marginTop="14px" marginBottom="240px" size="16px" height="12px" gradient={true} width="400px">{getTimeName(counter.days, 'day')}, {getTimeName(counter.hours, 'hour')}, {getTimeName(counter.minutes, 'minute')}, {getTimeName(counter.seconds, 'seconds')}</Button>
      </PageWrapper>
      <PageWrapper id="about" marginTop="30px" height="1100px">
        <Description/>
      </PageWrapper>
      <PageWrapper>
        <P marginBottom="80px" marginLeft="40px" weight="600" size="34px" height="42px">На чём можно участвовать</P>
        <Transport/>
      </PageWrapper>
      <Seasons id="seasons"/>
      <PageWrapper id="tasks" marginTop="80px" marginBottom="80px">
        <P marginBottom="20px" marginLeft="40px" weight="600" size="34px" height="42px">Прошлые фотозадания</P>
        <Gallery/>
      </PageWrapper>
      <PageWrapper id="merch">
        <P marginBottom="40px" marginLeft="40px" weight="600" size="34px" height="42px">Мерч</P>
        <Merch/>
      </PageWrapper>
      <PageWrapper id="team" marginTop="80px">
        <P marginBottom="40px" marginLeft="40px" weight="600" size="34px" height="42px">Наша команда</P>
        <Team/>
      </PageWrapper>
      <PageWrapper id="faq" marginTop="86px" height="600px">
        <P marginBottom="40px" marginLeft="40px" weight="600" size="34px" height="42px">У нас часто спрашивают</P>
        <FAQ/>
      </PageWrapper>
    </Container>
    <Footer/>
    </>
  );
};
