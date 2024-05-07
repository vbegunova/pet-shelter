import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 56px 10px 72px;
  border-radius: 30px;
  background-color: ${globalColors.light};
  position: relative;
  box-shadow: 0 -5px 114px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 768px) {
    padding: 43px 45px 62px;
    background-color: ${globalColors.secondaryBg};
    border-radius: 23px;
  }

  @media screen and (min-width: 1440px) {
    padding: 90px 100px;
    background-color: ${globalColors.light};
    border-radius: 60px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 38px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 0.9;
  letter-spacing: -0.2px;
  color: ${globalColors.title};
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 40px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 45px;
    font-size: 71px;
  }
`;

export const Text = styled.p`
  font-family: 'eUkraine', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.4px;
  margin-bottom: 33px;
  color: ${globalColors.listItem};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 9px;
    line-height: 1.3;
    width: 416px;
    text-align: left;
    margin-bottom: 17px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.25;
    width: 759px;
    margin-bottom: 35px;
  }
`;

export const Button = styled.button`
  width: 179px;
  height: 47px;
  border-radius: 60px;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding-bottom: 2px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    width: 156px;
    height: 45px;
    border-radius: 56px;
    font-size: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 306px;
    height: 80px;
    border-radius: 100px;
    font-size: 18px;
    padding-bottom: 5px;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  bottom: 20px;
  right: -60px;
  width: 110px;
  height: 124px;
  fill: ${globalColors.accent};
  transform: rotate(-31deg);

  @media screen and (min-width: 768px) {
    width: 176px;
    height: 199px;
    transform: rotate(0deg);
    right: 30px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 298px;
    height: 337px;
    bottom: 30px;
  }
`;
