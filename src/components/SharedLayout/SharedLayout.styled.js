import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from 'Styled/GlobalColors';

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 22px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 48px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 10px;
    justify-content: start;
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Navigation = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled(NavLink)`
  color: ${props => props.theme.main};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 24px;

  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 31px;
  }
`;

export const NavigationList = styled.ul`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 34px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.main};

  @media screen and (min-width: 1440px) {
    font-family: 'Hagrid Trial', sans-serif;
    font-weight: 900;
    font-size: 14px;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 34px;
  }
`;

export const Button = styled.a`
  display: none;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    width: 128px;
    height: 43px;
    font-size: 10px;
    border-radius: 54px;
    padding-bottom: 3px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    width: 236px;
    height: 80px;
    border-radius: 100px;
  }
`;

export const MobileMenuButton = styled.button`
  min-width: 40px;
  width: 40px;
  height: 40px;
  border: 1px solid ${globalColors.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    min-width: 43px;
    width: 43px;
    height: 43px;
    border: 2px solid ${globalColors.light};
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.svg`
  width: 17px;
  height: 20px;
  fill: ${props => props.theme.main};

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 21px;
  }
`;
