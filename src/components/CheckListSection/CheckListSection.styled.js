import { globalColors } from 'Styled/GlobalColors';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 46px 10px 72px;
  background-color: ${globalColors.background};
  border-radius: 30px;
  box-shadow: 0 -4.63px 105.64px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 768px) {
    padding: 49px 41px 39px 40px;
    border-radius: 37px;
    box-shadow: 0 -3.1px 70.64px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1440px) {
    padding: 81px 98px 121px 123px;
    border-radius: 60px;
    box-shadow: 0 -5px 114px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h2`
  margin-bottom: 39px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 25px;
  color: ${globalColors.light};
  letter-spacing: -0.3px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 671px;
    margin-bottom: 50px;
    font-size: 44px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 1072px;
    margin-bottom: 52px;
    font-size: 71px;
  }
`;

export const Content = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    align-items: center;
  }
`;

export const ImageBox = styled.div`
  margin-bottom: 30px;
  width: 274px;
  height: 268px;
  background-color: #f4f4f4;
  border-radius: 44px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4.51px 12.4px rgba(0, 0, 0, 0.17);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 201px;
    height: 197px;
    margin-left: 0;
    box-shadow: 0 3.31px 9.1px rgba(0, 0, 0, 0.17);
  }

  @media screen and (min-width: 1440px) {
    width: 243px;
    height: 238px;
    box-shadow: 0 4px 11px rgba(0, 0, 0, 0.17);
  }
`;

export const TextContent = styled.div`
  @media screen and (min-width: 768px) {
    width: 430px;
  }

  @media screen and (min-width: 1440px) {
    width: 656px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: -0.3px;
  color: ${globalColors.light};
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 14px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 23px;
    font-size: 21px;
  }
`;

export const List = styled.ol`
  margin-bottom: 31px;
  width: 250px;
  margin-left: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    width: 421px;
    margin-left: 15px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 39px;
    width: 624px;
  }
`;

export const Item = styled.li`
  font-family: 'eUkraine', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
    font-size: 11px;
    line-height: 1.6;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const Button = styled(NavLink)`
  width: 169px;
  height: 54px;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  letter-spacing: -0.3px;
  font-size: 12px;
  padding-bottom: 3px;
  border-radius: 67px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 346px;
    height: 50px;
    margin-left: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 553px;
    height: 80px;
    font-size: 18px;
  }
`;

export const Icon = styled.svg`
  width: 172px;
  height: 184px;

  @media screen and (min-width: 768px) {
    width: 102px;
    height: 108px;
  }

  @media screen and (min-width: 1440px) {
    width: 153px;
    height: 163px;
  }
`;

