import styled from 'styled-components';
import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';

export const Section = styled.section`
  background-color: ${globalColors.light};
  box-shadow: 0 -5px 114px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  padding-top: 42px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    padding-top: 45px;
    padding-bottom: 44px;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 60px;
    padding-top: 82px;
    padding-bottom: 80px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled};
`;

export const Title = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  color: ${globalColors.title};
  text-align: center;
  margin-bottom: 46px;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 49px;
    font-size: 67px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    margin-bottom: 92px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 35px;
  row-gap: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    column-gap: 14px;
    row-gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 107px;
    column-gap: 26px;
    row-gap: 44px;
  }
`;

export const MoreButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${globalColors.accent};
  background-color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.3px;
  border: 2px solid ${globalColors.accent};
  border-radius: 70px;
  font-size: 13px;
  width: 196px;
  height: 56px;
  padding-bottom: 5px;

  @media screen and (min-width: 768px) {
    width: 158px;
    height: 45px;
    padding-bottom: 3px;
    border-radius: 56px;
    font-size: 11px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 5px;
    width: 284px;
    height: 80px;
    font-size: 18px;
    border-radius: 100px;
    border: 3px solid ${globalColors.accent};
  }
`;
