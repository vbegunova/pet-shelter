import { Outlet } from 'react-router-dom';
import {
  Logo,
  Container,
  Header,
  Navigation,
  NavigationList,
  StyledLink,
  Button,
  MobileMenuButton,
  MobileMenuIcon,
} from './SharedLayout.styled';
import { Suspense } from 'react';
// import Loader from 'components/Loader';
import { useLocation } from 'react-router-dom';
import { globalColors } from '../../Styled/GlobalColors';
import sprite from '../../images/sprite.svg';

const SharedLayout = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const logoColor =
    currentPage === '/about-us' ||
    currentPage === '/adoption' ||
    currentPage === '/contacts'
      ? globalColors.text
      : globalColors.light;

  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <Logo
              to="/"
              theme={{
                main: logoColor,
              }}
            >
              PetCat
            </Logo>
            <NavigationList>
              <StyledLink
                to="/adoption"
                theme={{
                  main: logoColor,
                }}
              >
                Хвостики
              </StyledLink>
              <StyledLink
                to="/help"
                theme={{
                  main: logoColor,
                }}
              >
                Як допомогти
              </StyledLink>
              <StyledLink
                to="/gallery"
                theme={{
                  main: logoColor,
                }}
              >
                Галерея
              </StyledLink>
              <StyledLink
                to="/about-us"
                theme={{
                  main: logoColor,
                }}
              >
                Про нас
              </StyledLink>
              <StyledLink
                to="/blog"
                theme={{
                  main: logoColor,
                }}
              >
                Блог
              </StyledLink>
              <StyledLink
                to="/contacts"
                theme={{
                  main: logoColor,
                }}
              >
                Контакти
              </StyledLink>
            </NavigationList>

            <Button>Знайти друга</Button>
          </Navigation>
          <MobileMenuButton>
            <MobileMenuIcon theme={{
                main: logoColor,
              }}>
              <use href={`${sprite}#icon-paw`}></use>
            </MobileMenuIcon>
          </MobileMenuButton>
        </Container>
      </Header>
      <main>
        <Suspense>
          {/* fallback={<Loader />} */}
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
