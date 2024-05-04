import {
  BottomContainer,
  Button,
  ButtonsContainer,
  Container,
  FooterContainer,
  Logo,
  MenuList,
  SocMediaIcon,
  SocMediaItem,
  SocMediaList,
  StyledLink,
  TopContainer,
} from './Footer.styled';
import sprite from '../../images/sprite.svg';
import { useLocation } from 'react-router-dom';
import { globalColors } from '../../Styled/GlobalColors';

const Footer = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const footerColor =
    currentPage === '/help' || currentPage === '/check-list'
      ? globalColors.text
      : globalColors.light;

  const footerBgColor =
    currentPage === '/help' || currentPage === '/check-list'
      ? globalColors.light
      : globalColors.background;

  return (
    <FooterContainer
      theme={{
        bgColor: footerBgColor,
      }}
    >
      <Container>
        <TopContainer>
          <Logo
            to="/"
            theme={{
              main: footerColor,
            }}
          >
            PetCat
          </Logo>
          <MenuList>
            <li>
              <StyledLink
                to="/adoption"
                theme={{
                  main: footerColor,
                }}
              >
                Хвостики
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/help"
                theme={{
                  main: footerColor,
                }}
              >
                Як допомогти
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/gallery"
                theme={{
                  main: footerColor,
                }}
              >
                Галерея
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/about-us"
                theme={{
                  main: footerColor,
                }}
              >
                Про нас
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/blog"
                theme={{
                  main: footerColor,
                }}
              >
                Блог
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/contacts"
                theme={{
                  main: footerColor,
                }}
              >
                Контакти
              </StyledLink>
            </li>
          </MenuList>
        </TopContainer>
        <BottomContainer>
          <ButtonsContainer>
            <Button>Знайти друга</Button>
            <Button>Надіслати лист</Button>
          </ButtonsContainer>
          <SocMediaList>
            <li>
              <SocMediaItem>
                <SocMediaIcon>
                  <use href={`${sprite}#icon-instagram`}></use>
                </SocMediaIcon>
              </SocMediaItem>
            </li>
            <li>
              <SocMediaItem>
                <SocMediaIcon>
                  <use href={`${sprite}#icon-facebook`}></use>
                </SocMediaIcon>
              </SocMediaItem>
            </li>
            <li>
              <SocMediaItem>
                <SocMediaIcon>
                  <use href={`${sprite}#icon-telegram`}></use>
                </SocMediaIcon>
              </SocMediaItem>
            </li>
            <li>
              <SocMediaItem>
                <SocMediaIcon>
                  <use href={`${sprite}#icon-viber`}></use>
                </SocMediaIcon>
              </SocMediaItem>
            </li>
          </SocMediaList>
        </BottomContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
