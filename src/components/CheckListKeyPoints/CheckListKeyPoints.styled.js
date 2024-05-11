import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';

export const Section = styled.section`
  padding-bottom: 65px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-bottom: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 165px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 45px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: -0.2px;
  color: ${globalColors.light};
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 62px;
    font-size: 54px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 79px;
    font-size: 100px;
  }
`;

export const Span = styled.span`
  @media screen and (min-width: 768px) {
    margin-left: 155px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 240px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  font-family: 'eUkraine', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: -0.45px;
  color: ${globalColors.light};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    font-size: 21px;
  }

  &:first-child {
    margin-bottom: 23px;
  }

  @media screen and (min-width: 768px) {
    &:first-child {
      margin-bottom: 22px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-child {
      margin-bottom: 31px;
    }
  }
`;

// export const FirstText = styled(Text)`
//   margin-bottom: 23px;

//   @media screen and (min-width: 768px) {
//     margin-bottom: 22px;
//   }

//   @media screen and (min-width: 1440px) {
//     margin-bottom: 31px;
//   }
// `;

export const LeftText = styled(Text)`
  &:nth-child(2) {
    margin-bottom: 27px;
  }

  @media screen and (min-width: 768px) {
    &:nth-child(2) {
      margin-bottom: 37px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 25px;

    &:nth-child(2) {
      margin-bottom: 46px;
    }
  }
`;

export const LeftBox = styled.div`
  margin-bottom: 246px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 245px;
  }

  @media screen and (min-width: 1440px) {
    width: 431px;
  }
`;

export const RightBox = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 188px;
    width: 415px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: auto;
    width: 717px;
  }
`;

export const StyledLink = styled(NavLink)`
  width: 252px;
  height: 53px;
  border-radius: 59px;
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

  @media screen and (min-width: 768px) {
    margin-left: 0;
    width: 234px;
    height: 64px;
    border-radius: 54px;
    font-size: 14px;
    line-height: 1.3;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    width: 431px;
    height: 95px;
    border-radius: 100px;
    font-size: 18px;
    padding-bottom: 5px;
    text-align: left;
  }
`;

export const Image = styled.svg`
  position: absolute;
  top: 473px;
  right: -84px;
  width: 414px;
  height: 146px;

  @media screen and (min-width: 768px) {
    top: 176px;
    right: 50px;
    width: 401px;
    height: 141px;
  }

  @media screen and (min-width: 1440px) {
    top: 232px;
    right: 80px;
    width: 736px;
    height: 259px;
  }
`;
