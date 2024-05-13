import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 71px;
  padding-bottom: 62px;

  @media screen and (min-width: 768px) {
    padding-top: 45px;
    padding-bottom: 89px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 84px;
    padding-bottom: 163px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h2`
  margin-bottom: 36px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.3px;
  text-align: center;
  color: ${globalColors.title};

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 53px;
    text-transform: uppercase;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 57px;
    font-size: 100px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  margin-bottom: 36px;
  font-family: 'eUkraine', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.3px;
  text-align: center;
  color: ${globalColors.text};

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 275px;
    font-size: 15px;
    line-height: 1.3;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 45px;
    margin-bottom: 35px;
    width: 368px;
    font-size: 20px;
  }
`;

export const List = styled.ul`
  margin-bottom: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
  }
`;

export const Item = styled.li`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  color: ${globalColors.text};

  @media screen and (min-width: 768px) {
    font-size: 16px;

    &:nth-child(1),
    &:nth-child(3) {
      margin-left: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 30px;

    &:nth-child(1),
    &:nth-child(3) {
      margin-left: 46px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  width: 251px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 15px;
  letter-spacing: -0.2px;
  text-transform: uppercase;
  border-radius: 52px;
  padding-bottom: 2px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 33px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 0;
    width: 260px;
    height: 55px;
    font-size: 14px;
    border-radius: 53px;
    padding-bottom: 3px;
  }

  @media screen and (min-width: 1440px) {
    width: 487px;
    height: 104px;
    border-radius: 100px;
    font-size: 25px;
    padding-bottom: 5px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 243px;
  background-color: ${globalColors.background};
  border-radius: 19px;
  box-shadow: 0 1.92px 5.27px rgba(0, 0, 0, 0.17);

  @media screen and (min-width: 768px) {
    width: 332px;
    height: 271px;
    border-radius: 21px;
    box-shadow: 0 2.13px 5.87px rgba(0, 0, 0, 0.17);
  }

  @media screen and (min-width: 1440px) {
    width: 622px;
    height: 508px;
    border-radius: 39px;
    box-shadow: 0 4px 11px rgba(0, 0, 0, 0.17);
  }
`;

export const Image = styled.svg`
  width: 159px;
  height: 158px;

  @media screen and (min-width: 768px) {
    width: 177px;
    height: 176px;
  }

  @media screen and (min-width: 1440px) {
    width: 332px;
    height: 330px;
  }
`;