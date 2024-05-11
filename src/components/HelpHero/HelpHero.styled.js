import { NavLink } from 'react-router-dom';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 131px;
  padding-bottom: 78px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 72px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 218px;
    padding-bottom: 200px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled};
  position: relative;
`;

export const Title = styled.h1`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 31px;
  letter-spacing: 0.1px;
  text-align: center;
  color: ${globalColors.light};
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    font-size: 50px;
    letter-spacing: -0.3px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    font-size: 71px;
    width: 560px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'eUkraine Head', sans-serif;
  font-weight: 400;
  color: #632ca6;
  font-size: 20px;
  line-height: 1.1;
  margin-bottom: 28px;
  text-align: center;
  width: 270px;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 768px) {
    color: ${globalColors.light};
    display: block;
    margin-bottom: 25px;
    text-align: left;
    width: 350px;
    line-height: 1.5;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 550px;
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: start;
    list-style: inside;
  }
`;

export const Item = styled.li`
  font-family: 'eUkraine Head', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1;
  color: ${globalColors.light};

  @media screen and (min-width: 1440px) {
    font-size: 25px;
    line-height: 1.25;
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
    left: 390px;
    top: 163px;
    width: 182px;
    height: 182px;
  }

  @media screen and (min-width: 1440px) {
    left: 680px;
    top: 220px;
    width: 237px;
    height: 237px;
  }
`;

export const ButtonText = styled.svg`
  position: absolute;

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

export const HeroImage = styled.svg`
  position: absolute;
  top: 90px;
  right: 225px;
  width: 175px;
  height: 373px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    top: -16px;
    right: 0px;
    width: 300px;
    height: 467px;
  }

  @media screen and (min-width: 1440px) {
    top: -20px;
    right: 56px;
    width: 554px;
    height: 843px;
  }
`;