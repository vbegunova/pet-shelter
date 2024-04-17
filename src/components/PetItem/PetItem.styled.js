import { NavLink } from 'react-router-dom';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Item = styled.li`
  background-color: ${globalColors.secondaryLightText};
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 305px;
  border-radius: 30px;
  padding: 25px 18px 15px;

  @media screen and (min-width: 768px) {
    padding: 19px 14px 11px;
    width: calc((100% - 28px) / 3);
    height: 224px;
    border-radius: 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 396px;
    height: 402px;
    border-radius: 40px;
    padding: 32px 24px 21px;
  }
`;

export const Name = styled.h3`
  color: ${globalColors.light};
  font-family: 'eUkraine', sans-serif;
  font-weight: 500;
  font-size: 27px;  
  margin-bottom: 5px;
  letter-spacing: -0.6px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 3px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 35px;
    margin-bottom: 5px;
  }
`;

export const Info = styled.p`
  color: ${globalColors.light};
  font-family: 'eUkraine', sans-serif;
  font-weight: 300;

  font-size: 13px;
  letter-spacing: -0.6px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 17px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: auto;

  width: 150px;
  height: 52px;
  gap: 4px;

  font-size: 12px;
  border-radius: 52px;
  padding-bottom: 3px;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 38px;
    gap: 3px;
    border-radius: 38px;
    font-size: 9px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 5px;
    gap: 5px;
    width: 200px;
    height: 69px;
    font-size: 16px;
    border-radius: 69px;
  }
`;

export const LinkIcon = styled.svg`
  fill: ${globalColors.light};
  width: 13px;
  height: 15px;
  margin-top: 3px;

  @media screen and (min-width: 768px) {
    width: 10px;
    height: 11px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 3px;
    width: 18px;
    height: 20px;
  }
`;
