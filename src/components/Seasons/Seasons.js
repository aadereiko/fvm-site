import React from 'react';
import { P } from '../../helpers';
import { SeasonsWrapper, NightBlock, SpringBlock, AutumnBlock, InfoBlock } from './elements'


export const Seasons = (props) => {
  return (
    <SeasonsWrapper {...props}>
      <P marginLeft="40px" weight="600" size="34px" height="42px">Сезоны</P>
      <AutumnBlock>
        <InfoBlock>
          <P weight="500" size="24px" height="30px">Осенний</P>
          <P marginTop="17px" weight="400" size="14px" height="17px" width="190px">Текст про то, какой это классный сезон и как вообще классно было участвовать.<br/><br/>Всем советуем!</P>
        </InfoBlock>
      </AutumnBlock>
      <NightBlock>
        <InfoBlock>
          <P weight="500" size="24px" height="30px">Осенний</P>
          <P marginTop="17px" weight="400" size="14px" height="17px" width="190px">Текст про то, какой это классный сезон и как вообще классно было участвовать.<br/><br/>Всем советуем!</P>
        </InfoBlock>
      </NightBlock>
      <SpringBlock>
        <InfoBlock>
          <P weight="500" size="24px" height="30px">Осенний</P>
          <P marginTop="17px" weight="400" size="14px" height="17px" width="190px">Текст про то, какой это классный сезон и как вообще классно было участвовать.<br/><br/>Всем советуем!</P>
        </InfoBlock>
      </SpringBlock>
    </SeasonsWrapper>
  );
};
