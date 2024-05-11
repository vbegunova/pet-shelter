import sprite from '../../images/sprite.svg'
import {
  Box,
  Container,
  Item,
  List,
  Subtitle,
  Title,
  Button,
  ImageBox,
  Image,
} from './AboutUsDoMore.styled';

const AboutUsDoMore = () => {
  return (
    <section>
      <Container>
        <Title>Разом ми можемо більше</Title>
        <Box>
          <div>
            <Subtitle>
              Кожен може долучитися до нашої місії. Ваш внесок, чи то
              фінансовий, чи то волонтерський, робить реальну різницю в житті
              бездомних тварин. Разом ми можемо зробити більше щасливих
              хвостиків.
            </Subtitle>
            <List>
              <Item>Подарувати хвостику дім</Item>
              <Item>Допомогти речами</Item>
              <Item>Стати волонтером</Item>
              <Item>Взяти хвостика під опіку</Item>
            </List>
          </div>
          <div>
            <Button to="/help">Дізнатись більше</Button>
            <ImageBox>
              <Image>
                <use href={`${sprite}#icon-spread-love`}></use>
              </Image>
            </ImageBox>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default AboutUsDoMore;
