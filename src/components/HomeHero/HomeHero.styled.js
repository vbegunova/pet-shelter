import styled, { keyframes } from 'styled-components';
import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { NavLink } from 'react-router-dom';

export const SectionHero = styled.section`
  padding-top: 126px;
  padding-bottom: 47px;

  @media screen and (min-width: 768px) {
    padding-top: 137px;
    padding-bottom: 58px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 177px;
    padding-bottom: 191px;
  }
`;

export const HeroContainer = styled.div`
  ${ContainerStyled}
  position: relative;
`;

export const Title = styled.h1`
  margin-bottom: 43px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  color: ${globalColors.light};
  font-size: 51px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 76px;
    line-height: 0.9;
    margin-bottom: 75px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 88px;
    font-size: 139px;
  }
`;

export const TitleAccent = styled.span`
  color: ${globalColors.title};
`;

export const HeroText = styled.p`
  margin-bottom: 55px;

  width: 248px;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;

  font-family: 'eUkraine Head', sans-serif;
  font-weight: 400;

  color: ${globalColors.light};
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 0;
  }

  @media screen and (min-width: 1440px) {
    display: block;

    width: 385px;
    margin-bottom: 80px;

    font-size: 20px;
    line-height: 1.5;

    text-align: left;
  }
`;

export const HeroImage = styled.svg`
  position: absolute;
  top: 75px;
  right: 225px;
  width: 175px;
  height: 373px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    top: -16px;
    right: 0;
    width: 300px;
    height: 467px;
  }

  @media screen and (min-width: 1440px) {
    top: 50px;
    right: 56px;
    width: 554px;
    height: 843px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: none;
  z-index: 0;

  @media screen and (min-width: 768px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${globalColors.accent};
    border-radius: 50%;
    border: none;
    left: 395px;
    top: 157px;
    width: 182px;
    height: 182px;
  }

  @media screen and (min-width: 1440px) {
    left: 712px;
    top: 300px;
    width: 237px;
    height: 237px;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonText = styled.svg`
  position: absolute;
  /* animation: ${spin} 15s linear infinite; */

  @media screen and (min-width: 768px) {
    top: -19px;
    left: -19px;
    width: 219.25px;
    height: 219.18px;
  }

  @media screen and (min-width: 1440px) {
    top: -24px;
    left: -24px;
    width: 285.29px;
    height: 285.22px;
  }
`;

export const ButtonIcon = styled.svg`
  fill: ${globalColors.secondaryLightText};

  @media screen and (min-width: 768px) {
    width: 56px;
    height: 63px;
  }

  @media screen and (min-width: 1440px) {
    width: 73px;
    height: 82px;
  }
`;
