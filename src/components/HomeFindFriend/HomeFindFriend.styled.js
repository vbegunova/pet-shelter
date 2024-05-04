import { NavLink } from 'react-router-dom';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 62px;
  padding-bottom: 515px;
  background-color: ${globalColors.light};
  border-radius: 33px;
  box-shadow: 0px -2.77px 63.25px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: 86px;
    padding-top: 65px;
    padding-bottom: 52px;
    box-shadow: 0px -2.66px 60.72px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 117px;
    padding-top: 121px;
    padding-bottom: 100px;
    border-radius: 60px;
    box-shadow: 0px -5px 114px rgba(0, 0, 0, 0.15);
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
`;

export const Title = styled.h1`
  margin-bottom: 45px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: ${globalColors.title};
  letter-spacing: -0.3px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 38px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 94px;
    font-size: 71px;
  }
`;

export const Text = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${globalColors.text};
  text-align: center;

  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    width: 437px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    width: 575px;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const LastText = styled(Text)`
  margin-bottom: 52px;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 74px;
  }
`;

export const Button = styled(NavLink)`
  width: 231px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  border-radius: 37px;
  border: none;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5px;

  @media screen and (min-width: 768px) {
    margin-left: 88px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 8px;
    width: 434px;
    height: 97px;
    font-size: 26px;
    margin-left: 0;
    border-radius: 69px;
  }
`;

export const Image = styled.svg`
  width: 460px;
  height: 420px;
  position: absolute;
  bottom: -470px;
  left: -180px;

  @media screen and (min-width: 768px) {
    width: 639px;
    height: 584px;
    bottom: -100px;
    left: 510px; 
    transform: scaleX(-1);
  }

  @media screen and (min-width: 1440px) {
    width: 1200px;
    height: 1097px;
    bottom: -500px;
    left: 750px;
  }
`;