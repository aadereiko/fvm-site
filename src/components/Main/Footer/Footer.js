import React from 'react';
import { FooterDiv, UlNav, LiNav, FooterWrapper } from './elements';



export const Footer = ({isLaptop}) => {
  return (
    <FooterWrapper id="find">
      <div className='container'>
        <FooterDiv>
            <UlNav isLaptop={isLaptop}>
              <LiNav isLaptop={isLaptop}>
                <a href={`https://www.instagram.com/fotovelomarafon/`} target="__blank">Instagram</a>
              </LiNav>
              <LiNav isLaptop={isLaptop}>
                <a href={`https://vk.com/fotovelomarafon`} target="__blank">VKontakte</a>
              </LiNav>
              <LiNav isLaptop={isLaptop}>
                <a href={`https://t.me/fotovelomarafon`} target="__blank">Telegram</a>
              </LiNav>
              <LiNav isLaptop={isLaptop}>
                <a href={`https://www.youtube.com/channel/UCrmdyx-1tvv7B7TF9PQxSWQ`} target="__blank">YouTube</a>
              </LiNav>
              <LiNav isLaptop={isLaptop}>
                <a href={`https://www.facebook.com/fotovelomarafon/`} target="__blank">Facebook</a>
              </LiNav>
            </UlNav>
        </FooterDiv>
      </div>
    </FooterWrapper>
  );
};
