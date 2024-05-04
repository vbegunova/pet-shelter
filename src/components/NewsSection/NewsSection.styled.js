import { globalColors } from '../../Styled/GlobalColors';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 133px;

  @media screen and (min-width: 768px) {
    padding-bottom: 95px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 176px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
`;

export const Title = styled.h1`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: -0.3px;
  margin-bottom: 37px;
  text-align: center;
  color: ${globalColors.light};

  @media screen and (min-width: 768px) {
    font-size: 67px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 65px;
    font-size: 120px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media screen and (min-width: 768px) {
    gap: 19px;
  }

  @media screen and (min-width: 1440px) {
    gap: 34px;
  }
`;

export const Item = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ItemTitle = styled.p`
  font-family: 'Hagrid Text', sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 1.1;
  text-align: center;
  color: ${globalColors.light};
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.2;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    font-size: 27px;
  }
`;

export const MoreBtn = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 113px;
    height: 39px;
    border: none;
    border-radius: 38px;
    background-color: ${globalColors.accent};
    color: ${globalColors.light};
    font-family: 'Hagrid Trial', sans-serif;
    font-weight: 900;
    font-size: 9px;
    text-transform: uppercase;
    transition: all 300ms ease;

    &:hover {
      background-color: transparent;
      color: ${globalColors.light};
      border: 1px solid ${globalColors.light};
    }
  }

  @media screen and (min-width: 1440px) {
    width: 201px;
    height: 69px;
    font-size: 16px;
    padding-bottom: 5px;
  }
`;