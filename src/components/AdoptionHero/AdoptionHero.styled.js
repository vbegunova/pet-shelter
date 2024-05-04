import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 112px;
  padding-bottom: 27px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-top: 173px;
    padding-bottom: 51px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 208px;
    padding-bottom: 167px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
`;

export const CheckListContainer = styled.div`
  ${ContainerStyled}

  @media screen and (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 42px;
  width: 310px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 25px;
  letter-spacing: -0.3px;
  color: ${globalColors.title};

  @media screen and (min-width: 768px) {
    font-size: 34px;
    width: 688px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 98px;
    font-size: 71px;
    width: 1200px;
  }
`;

export const Text = styled.p`
  margin-bottom: 64px;
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #000000;

  @media screen and (min-width: 768px) {
    width: 550px;
    margin-bottom: 72px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 73px;
    width: 727px;
    font-size: 23px;
    margin-bottom: 197px;
    line-height: 1.2;
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
    right: -50px;
    top: 130px;
    width: 210px;
    height: 210px;
  }

  @media screen and (min-width: 1440px) {
    right: 160px;
    top: 350px;
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
    top: -22px;
    left: -22px;
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
    width: 56px;
    height: 63px;
  }

  @media screen and (min-width: 1440px) {
    width: 73px;
    height: 82px;
  }
`;