import { NavLink } from 'react-router-dom';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const MenuBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 22px;
  padding-bottom: 40px;
  background-color: ${globalColors.light};
  z-index: 999;

  @media screen and (min-width: 768px) {
    padding-top: 31px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  margin-bottom: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.p`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  color: ${globalColors.title};
  font-size: 24px;
  letter-spacing: -0.1px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 35px;
    letter-spacing: -0.3px;
  }
`;

export const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-color: ${globalColors.title};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 43px;
    height: 43px;
  }
`;

export const CrossIcon = styled.svg`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 25px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  color: ${globalColors.title};
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    color: ${globalColors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`;