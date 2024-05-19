import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${globalColors.light};
  box-shadow: 0 -5px 114px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  padding-top: 42px;
  padding-bottom: 36px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding-top: 45px;
    padding-bottom: 44px;
    box-shadow: 0 -2.78px 63.49px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1440px) {
    border-radius: none;
    box-shadow: none;
    padding-top: 82px;
    padding-bottom: 169px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled};
  position: relative;
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
  background-color: transparent;
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

// export const BgLineFirst = styled.svg`
//   display: none;

//   @media screen and (min-width: 768px) {
//     display: block;
//     width: 1399px;
//     height: 806px;
//     position: absolute;
//     transform: rotate(0deg) scaleY(-1);
//     left: -294px;
//     top: -125px;
//     z-index: 0;
//     stroke: rgba(71, 33, 121, 0.12);
//   }

//   @media screen and (min-width: 1440px) {
//     width: 1902px;
//     height: 1096px;
//     left: -130px;
//     top: 450px;
//   }
// `;

export const BgLineFirst = styled.svg`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 967px;
    height: 557px;
    position: absolute;
    transform: rotate(0deg) scaleY(-1);
    left: -260px;
    top: 340px;
    z-index: 0;
    stroke: rgba(71, 33, 121, 0.12);
  }

  @media screen and (min-width: 1440px) {
    width: 1810px;
    height: 1196px;
    left: -370px;
    top: 360px;
  }
`;

export const Box = styled.div`
  position: relative;
  z-index: 1;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const PaginationButton = styled.button`
  width: 44px;
  height: 44px;
  border: 4px solid ${globalColors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 41px;
    height: 41px;
  }

  @media screen and (min-width: 1440px) {
    width: 75px;
    height: 75px;
    border: 5px solid ${globalColors.accent};
  }

  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const PaginationIcon = styled.img`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 1440px) {
    width: 30px;
    height: 30px;
  }
`;

export const PaginationText = styled.p`
  font-family: 'eUkraine', sans-serif;
  font-weight: 500;
  color: ${globalColors.text};

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
