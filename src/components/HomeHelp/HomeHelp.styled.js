import styled from 'styled-components';
import { globalColors } from '../../Styled/GlobalColors';
import { NavLink } from 'react-router-dom';

export const SectionHelp = styled.section`
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 100%;
  padding: 38px 17px 214px;
  border-radius: 30px;
  text-align: center;

  background-color: ${globalColors.secondaryBg};

  @media screen and (min-width: 768px) {
    border-radius: 22px;
    padding: 43px 45px 62px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 40px;
    padding: 77px 80px 111px;
    text-align: left;
  }
`;

export const HelpTitle = styled.h2`
  z-index: 2;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  color: ${globalColors.title};
  font-size: 25px;
  margin-bottom: 29px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 71px;
    margin-bottom: 30px;
  }
`;

export const HelpSubtitle = styled.p`
  z-index: 2;
  margin-bottom: 26px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 500;
  color: ${globalColors.subtitle};
  text-transform: uppercase;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    width: 300px;
    font-size: 10px;
    margin-bottom: 15px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    font-size: 18px;
    margin-bottom: 25px;
  }
`;

export const HelpList = styled.ul`
  z-index: 2;
  margin-bottom: 34px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 768px) {
    gap: 7px;
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    gap: 15px;
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 30px;
  }
`;

export const HelpItem = styled.li`
  z-index: 2;
  font-weight: 300;
  color: ${globalColors.listItem};
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 9px;
    letter-spacing: -0.4px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 62px;
  width: 175px;
  height: 50px;
  font-size: 11px;
  padding-bottom: 5px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-left: 0px;
    width: 158px;
    height: 45px;
    font-size: 10px;
    letter-spacing: -0.3px;
    border-radius: 56px;
    padding-bottom: 5 px;
  }

  @media screen and (min-width: 1440px) {
    width: 284px;
    height: 80px;
    font-size: 19px;
    border-radius: 100px;
    padding-bottom: 10px;
  }
`;

export const HelpImage = styled.svg`
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 30px;
  width: 198px;
  height: 177px;

  @media screen and (min-width: 768px) {
    right: -35px;
    width: 303px;
    height: 296px;
  }

  @media screen and (min-width: 1440px) {
    right: -50px;
    width: 546px;
    height: 531px;
  }
`;

export const BgLine = styled.svg`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    transform: scaleY(-1);
    transform: rotate(9.95);
    position: absolute;
    width: 2010px;
    height: 1158px;
    left: -170px;
    top: -460px;
    stroke: rgba(135, 120, 153, 0.07);
    z-index: 0;
  }
`;
