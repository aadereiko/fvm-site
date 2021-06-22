import React, { useEffect, useState } from 'react';
import { HeaderDiv, UlNav, LiNav, HeaderWrapper, AnchorElement } from './elements';
import { Anchor } from 'antd';
const { Link } = Anchor;



export const Header = () => {
  const [colored, setColored] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setColored(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <HeaderWrapper colored={colored}>
      <div className='container'>
        <HeaderDiv>
          <AnchorElement>
            <UlNav>
              <LiNav>
                <Link href={`#about`} title='О проекте'/>
              </LiNav>
              <LiNav>
                <Link href={`#seasons`} title='Сезоны'/>
              </LiNav>
              <LiNav>
                <Link href={`#merch`} title='Мерч'/>
              </LiNav>
              <LiNav>
                <Link href={`#faq`} title='FAQ'/>
              </LiNav>
              <LiNav>
                <Link href={`#find`} title='Где нас искать'/>
              </LiNav>
            </UlNav>
          </AnchorElement>
        </HeaderDiv>
      </div>
    </HeaderWrapper>
  );
};
