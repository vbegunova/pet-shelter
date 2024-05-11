import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 195px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-bottom: 72px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 78px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 27px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: -0.1px;
  text-align: center;
  color: ${globalColors.light};

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
    font-size: 56px;
    font-weight: 800;
    letter-spacing: -0.2px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 64px;
    font-size: 100px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  letter-spacing: -0.2px;
  font-size: 18px;
  line-height: 0.9;
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

export const Text = styled.p`
  font-family: 'eUkraine', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 1.3;
  color: ${globalColors.light};

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.2;
    width: 443px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.3;
    width: 591px;
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
  left: -117px;
  bottom: -158px;
  width: 748px;
  height: 90px;

  @media screen and (min-width: 768px) {
    width: 672px;
    height: 81px;
    bottom: 246px;
    left: 431px;
  }

  @media screen and (min-width: 1440px) {
    width: 748px;
    height: 90px;
    bottom: 0;
    left: 691px;
  }
`;
