import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 253px;

  @media screen and (min-width: 768px) {
    padding-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 180px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  letter-spacing: -0.2px;
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
  color: ${globalColors.light};

  @media screen and (min-width: 768px) {
    margin-bottom: 22px;
    font-size: 28px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 42px;
    font-size: 51px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 736px;
  }
`;

export const Text = styled.p`
  font-family: 'eUkraine', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 1.3;
  color: ${globalColors.light};
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.2;
    width: 400px;
    margin-bottom: 44px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.3;
    width: 736px;
    margin-bottom: 43px;
  }
`;

export const FirstText = styled(Text)`
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
`;

export const Image = styled.svg`
  position: absolute;
  left: -50px;
  bottom: -233px;
  width: 360px;
  height: 210px;

  @media screen and (min-width: 768px) {
    width: 355px;
    height: 206px;
    bottom: 246px;
    left: -75px;
  }

  @media screen and (min-width: 1440px) {
    width: 572px;
    height: 315px;
    bottom: 0;
    left: -30px;
  }
`;

export const Button = styled.button`
  width: 190px;
  height: 50px;
  border-radius: 60px;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding-bottom: 2px;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    width: 170px;
    height: 45px;
    border-radius: 56px;
    font-size: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 306px;
    height: 80px;
    border-radius: 100px;
    font-size: 18px;
    padding-bottom: 5px;
  }
`;
