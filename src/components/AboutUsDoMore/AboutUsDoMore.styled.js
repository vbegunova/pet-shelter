import { ContainerStyled } from 'Styled/ContainerStyled';
import { globalColors } from 'Styled/GlobalColors';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.3px;
  margin-bottom: 30px;
  color: ${globalColors.title};
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 588px;
    font-size: 56px;
    margin-bottom: 57px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    width: 1058px;
    font-size: 100px;
    margin-bottom: 103px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 21px;
  letter-spacing: -0.3px;
  margin-bottom: 25px;
  line-height: 1.3;
  color: ${globalColors.title};
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 365px;
    font-size: 22px;
    margin-bottom: 19px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    width: 661px;
    font-size: 40px;
    margin-bottom: 42px;
  }
`;

export const List = styled.ul`
  margin-bottom: 17px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    list-style-type: disc;
    text-align: left;
    padding-left: 23px;
  }
`;

export const Item = styled.li`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  line-height: 1.2;
  font-size: 16px;
  color: ${globalColors.text};

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    font-size: 25px;
  }
`;

export const Button = styled(NavLink)`
  width: 184px;
  height: 48px;
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
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 37px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    width: 273px;
    height: 45px;
    border-radius: 56px;
    font-size: 12px;
    margin-bottom: 41px;
  }

  @media screen and (min-width: 1440px) {
    width: 491px;
    height: 80px;
    border-radius: 100px;
    font-size: 18px;
    padding-bottom: 5px;
    margin-bottom: 73px;
  }
`;

export const ImageBox = styled.div`
  width: 300px;
  height: 321px;
  background-color: ${globalColors.newsCardBg};
  border-radius: 24px;
  box-shadow: 0 2.48px 6.82px rgba(0, 0, 0, 0.17);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 273px;
    height: 288px;
    border-radius: 22px;
    box-shadow: 0 2.22px 6.12px rgba(0, 0, 0, 0.17);
  }

  @media screen and (min-width: 1440px) {
    width: 491px;
    height: 518px;
    border-radius: 39px;
    box-shadow: 0 4px 11px rgba(0, 0, 0, 0.17);
  }
`;

export const Image = styled.svg`
  width: 272px;
  height: 177px;

  @media screen and (min-width: 768px) {
    width: 244px;
    height: 159px;
  } 

  @media screen and (min-width: 1440px) {
    width: 440px;
    height: 286px;
  }
`;