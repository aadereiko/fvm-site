import React from 'react';
import { P } from '../../helpers';
import { SeasonsWrapper, NightBlock, SpringBlock, AutumnBlock } from './elements'


export const Seasons = () => {
  return (
    <SeasonsWrapper>
      <P paddingLeft="115px" weight="600" size="64px" height="78px">Сезоны</P>
      <AutumnBlock/>
      <NightBlock/>
      <SpringBlock/>
    </SeasonsWrapper>
  );
};
