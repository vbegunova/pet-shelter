import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 135px;

  @media screen and (min-width: 768px) {
    padding-top: 70px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 156px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;

  @media screen and (min-width: 768px) {
    padding-left: 0;
  }
`;

export const Box = styled.div`
  position: relative;
  border-radius: 30px;
  background-color: ${globalColors.background};
  padding: 45px 10px 48px;
  box-shadow: 0 -4.17px 95.17px rgba(0, 0, 0, 0.15);
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: 630px;
    padding-top: 44px;
    padding-bottom: 30px;
    padding-left: 38px;
    border-radius: 0 33px 33px 0;
    box-shadow: 0 -2.71px 61.81px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1440px) {
    width: 1035px;
    padding-top: 92px;
    padding-bottom: 87px;
    padding-left: 100px;
    border-radius: 0 60px 60px 0;
    box-shadow: 0 -5px 114px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.3px;
  color: ${globalColors.light};
  text-align: center;
  margin-bottom: 29px;

  @media screen and (min-width: 768px) {
    font-size: 38px;
    width: 271px;
    text-align: left;
    margin-bottom: 27px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    font-size: 71px;
    margin-bottom: 47px;
  }
`;

export const Text = styled.p`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.15px;
  line-height: 1.2;
  color: ${globalColors.light};
  text-align: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    width: 529px;
    text-align: left;
    margin-bottom: 27px;
    letter-spacing: -0.45px;
  }

  @media screen and (min-width: 1440px) {
    width: 766px;
    font-size: 22px;
    margin-bottom: 57px;
  }
`;

export const FirstText = styled(Text)`
  margin-bottom: 17px;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 23px;
  }
`;

export const StyledLink = styled(NavLink)`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 197px;
  height: 43px;
  border-radius: 54px;
  border: 1px solid ${globalColors.light};
  background-color: transparent;
  color: ${globalColors.light};
  font-family: 'eUkraine', sans-serif;
  font-weight: 700;
  letter-spacing: -0.2px;
  text-transform: uppercase;
  font-size: 11px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    width: 198px;
    border: 2px solid ${globalColors.light};
    font-size: 13px;
  }

  @media screen and (min-width: 1440px) {
    width: 365px;
    height: 80px;
    border: 3px solid ${globalColors.light};
    font-size: 25px;
  }
`;

export const Image = styled.svg`
  position: absolute;
  top: -76px;
  right: 93px;
  width: 131px;
  height: 140px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    width: 83px;
    height: 88px;
    transform: rotate(86.86deg);
    top: 119px;
    right: 92px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 153px;
    height: 163px;
    top: 219px;
    right: 320px;
  }
`;
