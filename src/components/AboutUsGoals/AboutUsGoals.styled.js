import { globalColors } from 'Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 49px;
  padding-bottom: 49px;
  border-radius: 30px;
  background-color: ${globalColors.background};
  box-shadow: 0 -5px 114px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 768px) {
    padding-bottom: 61px;
    border-radius: 37px;
    box-shadow: 0 -3.1px 70.64px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1440px) {
    padding-top: 101px;
    padding-bottom: 83px;
    border-radius: 60px;
    box-shadow: 0 -5px 114px rgba(0, 0, 0, 0.15);
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;  

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.3px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 31px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 71px;
    text-align: left;
    margin-bottom: 67px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 19px;
  color: ${globalColors.secondaryLightText};

  @media screen and (min-width: 768px) {
    margin-bottom: 31px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 23px;
    margin-bottom: 0;
    width: 430px;
    text-align: left;
  }
`;

export const List = styled.ol`
  list-style-type: decimal;
  padding-left: 20px;

  @media screen and (min-width: 1440px) {
    width: 743px;
    padding-left: 30px;
  }
`;

export const Item = styled.li`
  font-family: 'eUkraine', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: -0.3px;
  color: ${globalColors.secondaryLightText};

  @media screen and (min-width: 1440px) {
    font-size: 23px;
  }
`;
