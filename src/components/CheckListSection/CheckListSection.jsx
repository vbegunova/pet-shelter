import { useEffect, useState } from 'react';
import {
  Button,
  Content,
  Icon,
  ImageBox,
  Item,
  List,
  Section,
  Subtitle,
  TextContent,
  Title,
} from './CheckListSection.styled';
import sprite from '../../images/sprite.svg';

const CheckListSection = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      <Title>Чек-ліст відповідальної адопції хвостика</Title>
      <Content>
        <ImageBox>
          <Icon>
            <use href={`${sprite}#icon-check-list-cat`}></use>
          </Icon>
        </ImageBox>
        <TextContent>
          <Subtitle>
            Перш ніж приймати рішення, будь відповідальним та ознайомся з
            установленими правилами
          </Subtitle>
          <List>
            <Item>
              Ознайомся з анкетами та обери того самого пухнастого друга
            </Item>
            <Item>Зв’яжіться з нами і пройдіть інтерв’ю</Item>
            <Item>
              Узгодьте з нами день і час вашого візиту, щоб хвостик міг
              підготуватися до вашоїї зустрічі
            </Item>
            <Item>
              В день "Х" не забудьте взяти з собою паспорт та гарний настрій для
              підписання договору. Для котиків рекомендується мати переноску, а
              для песиків - повідок.
            </Item>
          </List>
          {isWideScreen ? (
            <Button to="/check-list">Детальніше про правила адоптації</Button>
          ) : (
            <Button to="/check-list">Детальніше</Button>
          )}
        </TextContent>
      </Content>
    </Section>
  );
};

export default CheckListSection;
