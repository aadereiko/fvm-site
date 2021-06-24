import React from 'react';
import { Container } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

import { Header } from './Header';
import { Footer } from './Footer';
import { PageWrapper, FirstImage } from './elements';
import { Description } from '../Description';
import { Transport } from '../Transport';
import { Seasons } from '../Seasons';
import { Merch } from '../Merch';
import { Team } from '../Team';
import { FAQ } from '../FAQ';
import { Gallery } from '../Gallery';
import { P, Button, Image } from '../../helpers';
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

  const isLaptop = useMediaQuery({query: '(min-width: 768px)'});

  return (
    <>
    {isLaptop && <Header/>}
    <Container>
      {isLaptop ? 
          <PageWrapper bgImage={bg} height="720px">
            <P paddingTop="157px" weight="600" size="80px" height="80px" width="404px">Время проявить себя</P>
            <P marginTop="12px" weight="400" size="16px" height="19px">26-27 июня</P>
            <a href="https://t.me/phvm_bot"><Button size="16px" height="18px" marginTop="93px" width="170px">Регистрация</Button></a>
            <Button marginTop="14px" marginBottom="240px" size="16px" height="12px" gradient={true} width="400px">{getTimeName(counter.days, 'day')}, {getTimeName(counter.hours, 'hour')}, {getTimeName(counter.minutes, 'minute')}, {getTimeName(counter.seconds, 'seconds')}</Button>
          </PageWrapper>
        :
        <>
          <PageWrapper isMobile={!isLaptop} >
            <FirstImage src={bg} contain={true} height="340px">
            </FirstImage>   
              <div>
                <P paddingTop="20px" weight="600" size="30px" height="40px" width="100%" align="center">Время проявить себя</P>
                <P marginTop="12px" weight="400" size="16px" height="19px" align="center">26-27 июня</P>
                <a href="https://t.me/phvm_bot"><Button weight="600" size="16px" height="18px" marginTop="10px" width="170px" marginLeft="auto" marginRight="auto">Регистрация</Button></a>
                <Button marginTop="14px" marginBottom="40px" size="11px" height="12px" gradient={true} width="100%">{getTimeName(counter.days, 'day')}, {getTimeName(counter.hours, 'hour')}, {getTimeName(counter.minutes, 'minute')}, {getTimeName(counter.seconds, 'seconds')}</Button>
              </div>
          </PageWrapper>
        </>
    }
      <PageWrapper  id="about" marginTop="30px">
        <Description isLaptop={isLaptop}/>
      </PageWrapper>
      <PageWrapper>
        {isLaptop ? 
            <P paddingTop="80px" marginBottom="80px" marginLeft="40px" weight="600" size="34px" height="42px">На чём можно участвовать</P>
          :
            <P paddingTop="30px" marginBottom="20px" weight="500" size="16px" height="18px" align="center">На чём можно участвовать</P>
      }
        <Transport isLaptop={isLaptop}/>
      </PageWrapper>
      <Seasons id="seasons" isLaptop={isLaptop}/>
      <PageWrapper id="tasks" marginTop="80px" marginBottom="80px">
        {isLaptop ? 
          <P marginBottom="20px" marginLeft="40px" weight="600" size="34px" height="42px">Прошлые фотозадания</P>
          :
          <P marginBottom="20px" align="center" weight="600" size="20px" height="24px">Прошлые фотозадания</P>
        }
        <Gallery isLaptop={isLaptop}/>
      </PageWrapper>
      <PageWrapper id="merch">
        {isLaptop ? 
          <P marginBottom="40px" marginLeft="40px" weight="600" size="34px" height="42px">Мерч</P>
          :
          <P marginBottom="20px" align="center" weight="600" size="20px" height="24px">Мерч</P>
        }
        <Merch isLaptop={isLaptop}/>
      </PageWrapper>
      <PageWrapper id="team" marginTop="80px">
        {isLaptop ? 
          <P marginBottom="40px" marginLeft="40px" weight="600" size="34px" height="42px">Наша команда</P>
          :
          <P marginBottom="20px" align="center" weight="600" size="20px" height="24px">Наша команда</P>
        }
        <Team isLaptop={isLaptop}/>
      </PageWrapper>
      <PageWrapper id="faq" marginTop="86px" height={isLaptop && "600px"}>
        {isLaptop ? 
          <P marginBottom="40px" marginLeft="40px" weight="600" size="34px" height="42px">У нас часто спрашивают</P>
          :
          <P marginBottom="10px" align="center" weight="600" size="20px" height="24px">У нас часто спрашивают</P>
        }
        <FAQ isLaptop={isLaptop}/>
      </PageWrapper>
    </Container>
    <Footer isLaptop={isLaptop}/>
    </>
  );
};
