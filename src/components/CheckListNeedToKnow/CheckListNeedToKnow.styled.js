import { ContainerStyled } from 'Styled/ContainerStyled';
import { globalColors } from 'Styled/GlobalColors';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 65px;

  @media screen and (min-width: 768px) {
    padding-bottom: 75px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 67px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h2`
  margin-bottom: 28px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: -0.2px;
  color: ${globalColors.light};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    margin-bottom: 52px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
    margin-bottom: 96px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 62px;
  }

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;

export const ImageBox = styled.div`
  width: 300px;
  height: 305px;
  border-radius: 29px;
  background-color: ${globalColors.accent};
  margin-bottom: 28px;
  box-shadow: 0 1.94px 29.62px rgba(0, 0, 0, 0.17);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 338px;
    height: 342px;
    border-radius: 33px;
    box-shadow: 0 2.18px 33.21px rgba(0, 0, 0, 0.17);
  }

  @media screen and (min-width: 1440px) {
    width: 622px;
    height: 629px;
    border-radius: 60px;
    box-shadow: 0 4px 61px rgba(0, 0, 0, 0.17);
  }
`;

export const Image = styled.svg`
  width: 144px;
  height: 139px;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 155px;
  }

  @media screen and (min-width: 1440px) {
    width: 295px;
    height: 285px;
  }
`;

export const Text = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 27px;
  line-height: 1.3;
  letter-spacing: -0.2px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 27px;
    width: 274px;
    margin-bottom: 31px;
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: 0;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 40px;
    width: 504px;
    margin-bottom: 60px;
    font-size: 21px;
  }
`;

export const List = styled.ul`
  margin-bottom: 27px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 67px;
  }
`;

export const Item = styled.li`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;

    &:nth-child(2) {
      margin-left: 18px;
    }

    &:nth-child(4) {
      margin-left: 38px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 30px;

    &:nth-child(2) {
      margin-left: 34px;
    }

    &:nth-child(4) {
      margin-left: 73px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  width: 263px;
  height: 54px;
  border-radius: 52px;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: -0.2px;
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
    width: 275px;
    height: 56px;
    border-radius: 54px;
    font-size: 14px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1440px) {
    width: 506px;
    height: 104px;
    border-radius: 100px;
    font-size: 25px;
    padding-bottom: 5px;
  }
`;