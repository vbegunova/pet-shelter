import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';

export const Section = styled.section`
  padding-top: 135px;
  padding-bottom: 36px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-top: 123px;
    padding-bottom: 42px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 238px;
    padding-bottom: 119px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
`;

export const Title = styled.h1`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  color: ${globalColors.title};
  letter-spacing: -0.3px;
  font-size: 32px;
  text-align: center;
  margin-bottom: 45px;

  @media screen and (min-width: 768px) {
    font-size: 53px;
    text-align: left;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 71px;
    margin-bottom: 31px;
  }
`;

export const Text = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 48px;
  color: ${globalColors.text};
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 37px;
    line-height: 1.3;
    letter-spacing: -0.2px;
    text-align: left;
    width: 520px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 23px;
    margin-bottom: 128px;
    line-height: 1.2;
    letter-spacing: 0;
    width: 727px;
  }
`;

export const SecondTitle = styled(Title)`
  margin-bottom: 37px;

  @media screen and (min-width: 768px) {
    font-size: 34px;
    margin-bottom: 19px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
    margin-bottom: 29px;
  }
`;

export const SecondText = styled(Text)`
  font-size: 16px;
  margin-bottom: 0;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    letter-spacing: -0.2px;
    width: 520px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 21px;
    letter-spacing: 0;
    width: 740px;
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
    top: 140px;
    right: -100px;
    width: 210px;
    height: 210px;
  }

  @media screen and (min-width: 1440px) {
    top: 315px;
    right: 215px;
    width: 237px;
    height: 237px;
  }
`;

export const ButtonText = styled.svg`
  position: absolute;

  @media screen and (min-width: 768px) {
    top: -21px;
    left: -21px;
    width: 253.08px;
    height: 253px;
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
    width: 64px;
    height: 73px;
  }

  @media screen and (min-width: 1440px) {
    width: 73px;
    height: 82px;
  }
`;
