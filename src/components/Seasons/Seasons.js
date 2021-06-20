import React from 'react';
import { P } from '../../helpers';
import { SeasonsWrapper, NightBlock, SpringBlock, AutumnBlock } from './elements'


export const Seasons = () => {
  return (
    <SeasonsWrapper>
      <P marginLeft="40px" weight="600" size="34px" height="42px">Сезоны</P>
      <AutumnBlock/>
      <NightBlock/>
      <SpringBlock/>
    </SeasonsWrapper>
  );
};
