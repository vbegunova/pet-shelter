import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 87px;
  padding-bottom: 82px;

  @media screen and (min-width: 768px) {
    padding-top: 85px;
    padding-bottom: 83px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 121px;
    padding-bottom: 148px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial';
  font-weight: 800;
  color: ${globalColors.light};
  text-align: center;
  margin-bottom: 33px;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 67px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    margin-bottom: 85px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 29px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 23px;
    margin-bottom: 52px;
  }

  @media screen and (min-width: 1440px) {
    gap: 41px;
    margin-bottom: 93px;
  }
`;

export const MoreBtn = styled(NavLink)`
  margin-left: auto;
  margin-right: auto;
  border: 2px solid ${globalColors.light};
  background-color: transparent;
  color: ${globalColors.light};
  width: 220px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  font-size: 12px;
  border-radius: 68px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 183px;
    height: 45px;
    font-size: 10px;
    border-radius: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 326px;
    height: 80px;
    font-size: 18px;
    border-radius: 100px;
  }
`;
