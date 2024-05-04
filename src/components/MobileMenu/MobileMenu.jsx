import { useEffect, useRef } from 'react';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import {
  CloseBtn,
  Container,
  CrossIcon,
  Logo,
  MenuBox,
  MenuList,
  StyledLink,
  TopContainer,
} from './MobileMenu.styled';
import sprite from '../../images/sprite.svg';

const MobileMenu = ({ onClose }) => {
  const mobileMenuRef = useRef(null);
  const mobileMenuRefCopy = useRef(null);

  useEffect(() => {
    mobileMenuRefCopy.current = mobileMenuRef.current;
    disableBodyScroll(mobileMenuRefCopy.current);

    const handleResize = () => {
      if (window.innerWidth > 1440) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      enableBodyScroll(mobileMenuRefCopy.current);
      clearAllBodyScrollLocks();
      window.removeEventListener('resize', handleResize);
    };
  }, [onClose]);

  return (
    <MenuBox ref={mobileMenuRef}>
      <Container>
        <TopContainer>
          <Logo onClick={onClose}>PetCat</Logo>
          <CloseBtn onClick={onClose}>
            <CrossIcon>
              <use href={`${sprite}#icon-cross`}></use>
            </CrossIcon>
          </CloseBtn>
        </TopContainer>
        <MenuList>
          <li>
            <StyledLink to="/adoption" onClick={onClose}>
              Хвостики
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/help" onClick={onClose}>
              Як допомогти
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/gallery" onClick={onClose}>
              Галерея
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/about-us" onClick={onClose}>
              Про нас
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/blog" onClick={onClose}>
              Блог
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/contacts" onClick={onClose}>
              Контакти
            </StyledLink>
          </li>
        </MenuList>
      </Container>
    </MenuBox>
  );
};

export default MobileMenu;
