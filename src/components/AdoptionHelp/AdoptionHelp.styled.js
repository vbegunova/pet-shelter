import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 49px;
  padding-bottom: 49px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 74px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 0;
    padding-bottom: 119px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const TitleBox = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
    flex-direction: row;
    gap: 24px;
    align-items: end;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 86px;
    gap: 48px;
  }
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.3px;
  color: ${globalColors.title};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 61px;
    text-align: left;
    width: 430px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    width: 845px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.3px;
  line-height: 1.3;
  color: ${globalColors.accent};
  text-align: center;
  width: 280px;

  @media screen and (min-width: 768px) {
    font-size: 9px;
    line-height: 1.2;
    text-align: left;
    width: 177px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    width: 348px;
  }
`;

export const List = styled.ul`
  margin-bottom: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-left: 125px;
    margin-bottom: 22px;
    align-items: start;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 245px;
    margin-bottom: 45px;
  }
`;

export const Item = styled.li`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: ${globalColors.secondaryText};

  @media screen and (min-width: 768px) {
    font-size: 31px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 61px;
  }
`;

export const MoreBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  border-radius: 52px;
  width: 251px;
  height: 54px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  letter-spacing: -0.2px;
  font-size: 13px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 3px;

  @media screen and (min-width: 768px) {
    margin-left: 125px;
    width: 248px;
    height: 53px;
    padding-bottom: 5px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 245px;
    width: 487px;
    height: 104px;
    font-size: 25px;
    padding-bottom: 7px;
  }
`;
