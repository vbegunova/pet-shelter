import {
  Logo,
  Container,
  HeaderContainer,
  Navigation,
  NavigationList,
  StyledLink,
  Button,
  MobileMenuButton,
  MobileMenuIcon,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { useLocation } from 'react-router-dom';
import { globalColors } from '../../Styled/GlobalColors';

const Header = ({ onOpen }) => {
  const location = useLocation();
  const currentPage = location.pathname;
  const headerColor =
    currentPage === '/about-us' ||
    currentPage === '/contacts' ||
    currentPage.includes('adoption')
      ? globalColors.text
      : globalColors.light;

  return (
    <HeaderContainer>
      <Container>
        <Navigation>
          <Logo
            to="/"
            theme={{
              main: headerColor,
            }}
          >
            PetCat
          </Logo>
          <NavigationList>
            <li>
              <StyledLink
                to="/adoption"
                theme={{
                  main: headerColor,
                }}
              >
                Хвостики
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/help"
                theme={{
                  main: headerColor,
                }}
              >
                Як допомогти
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/check-list"
                theme={{
                  main: headerColor,
                }}
              >
                Чек-ліст
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/about-us"
                theme={{
                  main: headerColor,
                }}
              >
                Про нас
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/blog"
                theme={{
                  main: headerColor,
                }}
              >
                Блог
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/contacts"
                theme={{
                  main: headerColor,
                }}
              >
                Контакти
              </StyledLink>
            </li>
          </NavigationList>
          <Button to="/adoption">Знайти друга</Button>
        </Navigation>
        <MobileMenuButton
          theme={{
            main: headerColor,
          }}
          onClick={onOpen}
        >
          <MobileMenuIcon
            theme={{
              main: headerColor,
            }}
          >
            <use href={`${sprite}#icon-paw`}></use>
          </MobileMenuIcon>
        </MobileMenuButton>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
