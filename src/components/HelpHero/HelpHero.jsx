import {
  Container,
  List,
  Section,
  Subtitle,
  Title,
  Item,
  StyledLink,
  ButtonText,
  ButtonIcon,
  HeroImage,
} from './HelpHero.styled';
import sprite from '../../images/sprite.svg';

const HelpHero = () => {
  return (
    <Section>
      <Container>
        <Title>Як ти можеш допомогти?</Title>
        <Subtitle>
          Лише декілька клацань, і хвостики засяяють щасливим світлом.
          Приєднуйтесь до нас у підтримці тварин!
        </Subtitle>
        <List>
          <Item>Подарувати хвостику дім</Item>
          <Item>Допомогти речами</Item>
          <Item>Стати волонтером</Item>
          <Item>Взяти хвостика під опіку</Item>
        </List>
        <HeroImage>
          <use href={`${sprite}#icon-hero-image`}></use>
        </HeroImage>
        <StyledLink to="/adoption">
          <ButtonText>
            <use href={`${sprite}#icon-home-hero-btn-text`}></use>
          </ButtonText>
          <ButtonIcon>
            <use href={`${sprite}#icon-paw`}></use>
          </ButtonIcon>
        </StyledLink>
      </Container>
    </Section>
  );
};

export default HelpHero;
