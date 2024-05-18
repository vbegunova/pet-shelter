import { globalColors } from 'Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 67px;
  padding-bottom: 77px;

  @media screen and (min-width: 768px) {
    padding-top: 71px;
    padding-bottom: 91px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 104px;
    padding-bottom: 110px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: ${globalColors.title};
  letter-spacing: -0.3px;
  margin-bottom: 22px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 34px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    font-size: 71px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${globalColors.text};
  letter-spacing: -0.2px;
  line-height: 1.2;
  margin-bottom: 25px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    letter-spacing: 0;
    width: 368px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    font-size: 25px;
    width: 665px;
    line-height: 1.1;
  }
`;

export const SecondText = styled(Text)`
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    width: 269px;
  }

  @media screen and (min-width: 1440px) {
    width: 485px;
  }
`;
