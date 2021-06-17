import React from 'react';
import { Header } from './Header';
import { PageWrapper } from './elements';
import { Description } from '../Description';
import { Transport } from '../Transport';
import { Seasons } from '../Seasons';
import { Merch } from '../Merch';
import { P, Button } from '../../helpers';
import bg from '../../assets/images/screen.png';

export const Main = () => {
  return (
    <main>
      <Header/>
      <PageWrapper bgImage={bg} height="1070px">
        <P paddingTop="271px" weight="600" size="96px" height="96px" width="485px">Время проявить себя</P>
        <P marginTop="25px" weight="400" size="24px" height="30px">26-27 июня</P>
        <Button marginTop="40px" width="205px">Регистрация</Button>
        <Button marginTop="40px" marginBottom="240px" gradient={true} width="471px">20 дней, 15 часов, 12 минут, 40 секунд</Button>
      </PageWrapper>
      <PageWrapper marginTop="118px">
        <Description/>
      </PageWrapper>
      <Seasons/>
      <PageWrapper>
        <P marginBottom="120px" weight="600" size="64px" height="78px">На чём можно участвовать</P>
        <Transport/>
      </PageWrapper>
      <PageWrapper>
        <P marginBottom="100px" weight="600" size="64px" height="78px">Мерч</P>
        <Merch/>
      </PageWrapper>
    </main>
  );
};
