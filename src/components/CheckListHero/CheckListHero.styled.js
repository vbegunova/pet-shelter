import { globalColors } from 'Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 125px;
  padding-bottom: 134px;

  @media screen and (min-width: 768px) {
    padding-top: 136px;
    padding-bottom: 58px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 229px;
    padding-bottom: 160px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
`;

export const Title = styled.h1`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 45px;
  letter-spacing: -0.3px;
  color: ${globalColors.light};
  margin-bottom: 38px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-left: 195px;
    margin-bottom: 20px;
    font-size: 67px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 352px;
    margin-bottom: 37px;
    font-size: 120px;
  }
`;

export const Span = styled.span`
  @media screen and (min-width: 768px) {
    margin-left: 149px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 268px;
  }
`;

export const Text = styled.p`
  margin-bottom: 348px;
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: ${globalColors.light};
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    width: 312px;
    margin-left: 269px;
    margin-bottom: 157px;
  }

  @media screen and (min-width: 1440px) {
    width: 582px;
    font-size: 25px;
    margin-left: 486px;
    margin-bottom: 281px;
  }
`;

export const Image = styled.svg`
position: absolute;
top: 246px;
left: 37px;
  width: 246px;
  height: 235px;

  @media screen and (min-width: 768px) {
    top: 91px;
    left: 52px;
    width: 233px;
    height: 222px;
  }

  @media screen and (min-width: 1440px) {
    top: 164px;
    left: 128px;
    width: 418px;
    height: 399px;
  }
`;