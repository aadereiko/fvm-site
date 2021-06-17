import React from 'react';
import { P, Image } from '../../helpers';
import { ImagesWrapper } from './elements'
import photo1 from '../../assets/images/photo-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';
import photo4 from '../../assets/images/photo-4.png';


export const Description = () => {
  return (
    <>
      <Image bgImage={photo1} width="1680px" height="1119.66px">
        <div>
        <P weight="500" size="32px" height="39px">Проект</P>
        <P marginTop="25px" paddingBottom="60px" weight="400" size="24px" height="29px">
          Это уникальный проект, объединивший в себе спортивную и культурную сферы жизни<br></br>
          ФотоВело состоит из двух ингредиентов:<br></br>
          интересный маршрут и необычные фотозадания<br></br>
          <br></br>
          Благодаря этому вы сможете проверить не только свою выносливость, но и креативность </P>
        </div>
      </Image>
      <ImagesWrapper>
        <Image bgImage={photo2} marginRight="30px" width="540px" height="360px">
          <div>
            <P weight="500" size="32px" height="39px">Механика</P>
          </div>
        </Image>
        <Image bgImage={photo3} marginRight="30px" width="540px" height="360px">
          <div>
            <P weight="500" size="32px" height="39px">Финиш</P>
          </div>
        </Image>
        <Image bgImage={photo4} marginRight="30px" width="540px" height="360px">
          <div>
            <P weight="500" size="32px" height="39px">Награждение</P>
          </div>
        </Image>
      </ImagesWrapper>
    </>
  );
};
