import styled from 'styled-components';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';

export const Section = styled.section`
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 152px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  overflow: hidden;

  @media scree and (min-width: 768px) {
    overflow: visible;
  }
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.2px;
  line-height: 1.1;
  color: ${globalColors.light};
  margin-bottom: 32px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 39px;
    margin-bottom: 35px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    font-size: 71px;
    margin-bottom: 64px;
  }
`;

export const Text = styled.p`
  font-family: 'eUkraine Head', sans-serif;
  font-weight: 500;
  letter-spacing: -0.4px;
  line-height: 1.2;
  text-align: center;
  font-size: 17px;
  color: ${globalColors.listItem};
  width: 261px;

  @media screen and (min-width: 768px) {
    width: 262px;
    text-align: left;
    font-size: 15px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    width: 481px;
    font-size: 18px;
  }
`;
