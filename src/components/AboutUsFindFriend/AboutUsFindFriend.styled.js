import { NavLink } from 'react-router-dom';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';
import { globalColors } from 'Styled/GlobalColors';

export const Section = styled.section`
  padding-top: 81px;
  padding-bottom: 430px;

  @media screen and (min-width: 768px) {
    padding-top: 61px;
    padding-bottom: 75px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 124px;
    padding-bottom: 146px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.4px;
  color: ${globalColors.title};
  margin-bottom: 28px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 53px;
    margin-bottom: 50px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    font-size: 95px;
    margin-bottom: 104px;
  }
`;

export const Text = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${globalColors.text};
  line-height: 1.3;
  text-align: center;
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    width: 469px;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.2px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 92px;
    width: 504px;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0;
  }
`;

export const FirstText = styled(Text)`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 27px;
  }
`;

export const StyledLink = styled(NavLink)`
  width: 250px;
  height: 53px;
  border-radius: 51px;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding-bottom: 2px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    width: 264px;
    height: 56px;
    border-radius: 54px;
    font-size: 13px;
  }

  @media screen and (min-width: 1440px) {
    width: 487px;
    height: 104px;
    border-radius: 100px;
    font-size: 25px;
    padding-bottom: 5px;
  }
`;

export const Image = styled.svg`
  position: absolute;
  width: 359px;
  height: 277px;
  bottom: -358px;
  right: -10px;

  @media screen and (min-width: 768px) {
    width: 232px;
    height: 179px;
    bottom: 188px;
    right: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 590px;
    height: 455px;
    bottom: 118px;
    right: 100px;
  }
`;
