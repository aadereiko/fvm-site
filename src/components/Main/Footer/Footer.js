import React from 'react';
import { FooterDiv, UlNav, LiNav, FooterWrapper } from './elements';



export const Footer = () => {
  return (
    <FooterWrapper>
      <div className='container'>
        <FooterDiv>
            <UlNav>
              <LiNav>
                <a href={`#about`}>Instagram</a>
              </LiNav>
              <LiNav>
                <a href={`#seasons`}>VKontakte</a>
              </LiNav>
              <LiNav>
                <a href={`#merch`}>Telegram</a>
              </LiNav>
              <LiNav>
                <a href={`#faq`}>YouTube</a>
              </LiNav>
              <LiNav>
                <a href={`#find`}>Facebook</a>
              </LiNav>
            </UlNav>
        </FooterDiv>
      </div>
    </FooterWrapper>
  );
};
