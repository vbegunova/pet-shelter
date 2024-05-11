import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 53px 10px 63px;
  border-radius: 30px;
  background-color: ${globalColors.light};
  box-shadow: 0 -5px 114px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 768px) {
    padding: 38px 60px 49px 50px;
    border-radius: 33px;
    box-shadow: 0 -2.79px 63.5px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1440px) {
    padding: 69px 109px 87px 90px;
    border-radius: 60px;
    box-shadow: 0 -5px 114px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: ${globalColors.title};
  text-align: center;
  letter-spacing: -0.2px;
  margin-bottom: 23px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 15px;
    font-size: 40px;
    line-height: 0.9;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 13px;
    font-size: 71px;
  }
`;

export const Span = styled.span`
  @media screen and (min-width: 768px) {
    margin-left: 361px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 649px;
  }
`;

export const TextBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 48px;
  }

  @media screen and (min-width: 1440px) {
    gap: 86px;
  }
`;

export const Text = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: -0.2px;
  color: ${globalColors.listItem};
  text-align: center;
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    font-weight: 700;
    width: 360px;
    line-height: 1.2;
    letter-spacing: -0.4px;
    text-align: left;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 578px;
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const SecondText = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 800;
  font-size: 21px;
  line-height: 1.25;
  letter-spacing: -0.4px;
  text-align: center;
  color: ${globalColors.listItem};

  @media screen and (min-width: 768px) {
    width: 210px;
    font-size: 16px;
    margin-top: 26px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 64px;
    font-size: 28px;
    width: 377px;
  }
`;