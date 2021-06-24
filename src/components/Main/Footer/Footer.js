import React from 'react';
import { FooterDiv, UlNav, LiNav, FooterWrapper, Inst, Vk, Fb, Tg, YouTube } from './elements';



export const Footer = ({isLaptop}) => {
  return (
    <>
      {isLaptop ?  
      <FooterWrapper id="find">
        <div className='container'>
          <FooterDiv isLaptop={isLaptop}>
              <UlNav >
                <LiNav isLaptop={isLaptop} >
                  <a href={`https://www.instagram.com/fotovelomarafon/`} target="__blank">Instagram</a>
                </LiNav>
                <LiNav isLaptop={isLaptop} >
                  <a href={`https://vk.com/fotovelomarafon`} target="__blank">VKontakte</a>
                </LiNav>
                <LiNav isLaptop={isLaptop} >
                  <a href={`https://t.me/fotovelomarafon`} target="__blank">Telegram</a>
                </LiNav>
                <LiNav isLaptop={isLaptop} >
                  <a href={`https://www.youtube.com/channel/UCrmdyx-1tvv7B7TF9PQxSWQ`} target="__blank">YouTube</a>
                </LiNav>
                <LiNav isLaptop={isLaptop} >
                  <a href={`https://www.facebook.com/fotovelomarafon/`} target="__blank">Facebook</a>
                </LiNav>
              </UlNav>
          </FooterDiv>
        </div>
      </FooterWrapper>
      :
      <FooterWrapper id="find">
        <div className='container'>
          <FooterDiv isLaptop={isLaptop}>
              <UlNav >
                <LiNav isLaptop={isLaptop}>
                  <a href={`https://www.instagram.com/fotovelomarafon/`} target="__blank"><Inst/></a>
                </LiNav>
                <LiNav isLaptop={isLaptop} >
                  <a href={`https://vk.com/fotovelomarafon`} target="__blank"><Vk/></a>
                </LiNav>
                <LiNav isLaptop={isLaptop} >
                  <a href={`https://t.me/fotovelomarafon`} target="__blank"><Tg/></a>
                </LiNav>
                <LiNav isLaptop={isLaptop} >
                  <a href={`https://www.youtube.com/channel/UCrmdyx-1tvv7B7TF9PQxSWQ`} target="__blank"><YouTube/></a>
                </LiNav>
                <LiNav isLaptop={isLaptop} >
                  <a href={`https://www.facebook.com/fotovelomarafon/`} target="__blank"><Fb/></a>
                </LiNav>
              </UlNav>
          </FooterDiv>
        </div>
      </FooterWrapper>

        
    }
    </>
    
  );
};
