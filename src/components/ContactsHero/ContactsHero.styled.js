import styled from 'styled-components';
import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';

export const Section = styled.section`
  padding-top: 127px;
  padding-bottom: 46px;

  @media screen and (min-width: 768px) {
    padding-top: 136px;
    padding-bottom: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 255px;
    padding-bottom: 101px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h1`
  margin-bottom: 38px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.3px;
  text-align: center;
  color: ${globalColors.title};

  @media screen and (min-width: 1440px) {
    margin-bottom: 38px;
    font-size: 53px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 72px;
    font-size: 100px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 15px;
  }
`;

export const SocMediaList = styled.ul`
  display: flex;
  align-items: center;
  gap: 7px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    gap: 15px;
  }
`;

export const SocMediaItem = styled.a`
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${globalColors.accent};

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

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }

  @media screen and (min-width: 1440px) {
    gap: 15px;
  }
`;

export const Button = styled.a`
  width: 111px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 9px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
  border-radius: 48px;
  padding-bottom: 2px;

  @media screen and (min-width: 768px) {
    width: 178px;
    height: 43px;
    font-size: 14px;
    border-radius: 33px;
    padding-bottom: 3px;
  }

  @media screen and (min-width: 1440px) {
    width: 232px;
    height: 80px;
    border-radius: 100px;
    font-size: 18px;
    padding-bottom: 5px;
  }
`;