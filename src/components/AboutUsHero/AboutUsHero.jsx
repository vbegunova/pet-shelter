import sprite from '../../images/sprite.svg';
import {
  Container,
  SecondText,
  SecondTitle,
  Section,
  Text,
  Title,
  StyledLink,
  ButtonText,
  ButtonIcon,
} from './AboutUsHero.styled';

const AboutUsHero = () => {
  return (
    <Section>
      <Container>
        <Title>Наша Історія: Любов, Турбота та Зміни</Title>
        <Text>
          Щасливі хвостики - це не лише мета, а й наша пристрасть. Давайте
          розкажемо вам більше про те, хто ми і чому ми робимо те, що робимо.
        </Text>
        <SecondTitle>Наша місія</SecondTitle>
        <SecondText>
          Ми зробили своєю метою створити безпечне і щасливе місце для кожного
          бездомного тварини. Наша місія - забезпечити їм не лише притулок, але
          й найкращі умови, де кожен зможе знайти свій дім та отримати безмежну
          любов.
        </SecondText>
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

export default AboutUsHero;
