import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 78px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-bottom: 76px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 118px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h2`
  margin-bottom: 81px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  text-align: right;
  width: 260px;
  letter-spacing: -0.1px;
  color: ${globalColors.light};
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    font-size: 56px;
    letter-spacing: -0.3px;
    line-height: 0.9;
    margin-left: 0;
    width: 450px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    width: 800px;
    margin-bottom: 105px;
    font-size: 100px;
  }
`;

export const TextBox = styled.div`
  margin-bottom: 102px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    align-items: center;
    margin-bottom: 158px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  margin-bottom: 27px;

  @media screen and (min-width: 768px) {
    align-items: start;
    gap: 23px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    gap: 42px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 19px;
  color: ${globalColors.light};
  letter-spacing: -0.3px;
  line-height: 0.9;

  @media screen and (min-width: 768px) {
    width: 263px;
    font-size: 29px;
  }

  @media screen and (min-width: 1440px) {
    width: 470px;
    font-size: 51px;
  }
`;

export const StyledLink = styled.a`
  width: 156px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${globalColors.light};
  color: ${globalColors.light};
  border-radius: 43px;
  font-family: 'eUkraine', sans-serif;
  font-weight: 700;
  letter-spacing: -0.2px;
  font-size: 11px;

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 45px;
    font-size: 14px;
    border-radius: 56px;
    border: 2px solid ${globalColors.light};
  }

  @media screen and (min-width: 1440px) {
    width: 365px;
    height: 80px;
    font-size: 25px;
    border-radius: 100px;
    border: 3px solid ${globalColors.light};
  }
`;

export const Text = styled.p`
  font-family: 'eUkraine', sans-serif;
  font-weight: 300;
  font-size: 15px;
  letter-spacing: -0.4px;
  line-height: 1.3;
  color: ${globalColors.light};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    text-align: left;
    width: 371px;
  }

  @media screen and (min-width: 1440px) {
    width: 665px;
  }
`;
