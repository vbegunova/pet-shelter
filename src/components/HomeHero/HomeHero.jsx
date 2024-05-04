import {
  SectionHero,
  HeroContainer,
  Title,
  TitleAccent,
  HeroText,
  HeroImage,
  StyledLink,
  ButtonText,
  ButtonIcon,
  BgLineFirst,
  BgLineSecond,
} from './HomeHero.styled';
import sprite from '../../images/sprite.svg';
import HomeHelp from '../HomeHelp';

const HomeHero = () => {
  return (
    <SectionHero>
      <HeroContainer>
        <Title>
          Знайди
          <br />
          свого
          <br />
          <TitleAccent>друга</TitleAccent>
        </Title>
        <HeroText>
          Ласкаво просимо в таємничий світ безмежної любові та вірності
        </HeroText>
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
        <HomeHelp />
      </HeroContainer>
      <BgLineFirst>
        <use href={`${sprite}#icon-line-first`}></use>
      </BgLineFirst>
      <BgLineSecond>
        <use href={`${sprite}#icon-line-first`}></use>
      </BgLineSecond>
    </SectionHero>
  );
};

export default HomeHero;
