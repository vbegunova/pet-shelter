import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 131px;
  padding-bottom: 78px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 213px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 218px;
    padding-bottom: 170px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled};
`;

export const Title = styled.h1`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 31px;
  letter-spacing: 0.1px;
  text-align: center;
  color: ${globalColors.light};

  @media screen and (min-width: 768px) {
    font-size: 55px;
    letter-spacing: -0.3px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 71px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'eUkraine Head', sans-serif;
  font-weight: 400;
  color: #632ca6;
  font-size: 20px;
  line-height: 1.1;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    color: ${globalColors.light};
    display: block;
  }
`;
