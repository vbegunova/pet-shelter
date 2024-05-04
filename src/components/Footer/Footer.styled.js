import { NavLink } from 'react-router-dom';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: 59px;
  padding-bottom: 65px;
  background-color: ${props => props.theme.bgColor};

  @media screen and (min-width: 768px) {
    padding-top: 23px;
    padding-bottom: 39px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 47px;
    padding-bottom: 72px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}

  @media screen and (min-width: 768px) {
    position: relative;
  }
`;

export const TopContainer = styled.div`
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  gap: 41px;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    gap: 50px;
    align-items: start;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 68px;
    flex-direction: row;
    gap: 0px;
    justify-content: space-between;
  }
`;

export const Logo = styled(NavLink)`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 24px;
  color: ${props => props.theme.main};
  line-height: 0.74;
  letter-spacing: -0.1px;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 35px;
    letter-spacing: -0.3px;
    line-height: 1;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 10px;
    width: 750px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 14px;
  color: ${props => props.theme.main};
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 17px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 4px;
    right: 37px;
    flex-direction: row-reverse;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    position: static;
    flex-direction: row;
    gap: 0px;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    flex-direction: row;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    gap: 15px;
  }
`;

export const Button = styled(NavLink)`
  width: 153px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: -0.3px;
  padding-bottom: 2px;
  border-radius: 66px;

  @media screen and (min-width: 768px) {
    width: 118px;
    height: 41px;
    font-size: 9px;
    border-radius: 51px;
  }

  @media screen and (min-width: 1440px) {
    width: 232px;
    height: 80px;
    font-size: 19px;
    border-radius: 100px;
  }
`;

export const SocMediaList = styled.ul`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 183px;
  }

  @media screen and (min-width: 1440px) {
    width: 365px;
  }
`;

export const SocMediaItem = styled.a`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: ${globalColors.accent};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 41px;
    height: 41px;
  }

  @media screen and (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
`;

export const SocMediaIcon = styled.svg`
  width: 17px;
  height: 17px;

  @media screen and (min-width: 768px) {
    width: 19px;
    height: 19px;
  }

  @media screen and (min-width: 1440px) {
    width: 34px;
    height: 34px;
  }
`;
