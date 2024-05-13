import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';
import mapImg from '../../images/map.jpg';

export const Container = styled.div`
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  height: 604px;
  box-shadow: -180px -13px 230px rgba(146, 68, 249, 0.3);
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    border-radius: 32px;
    height: 322px;
    box-shadow: -96px -6.93px 122.67px rgba(146, 68, 249, 0.3);
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    border-radius: 60px;
    height: 604px;
    box-shadow: -180px -13px 230px rgba(146, 68, 249, 0.3);
  }

  background-image: url(${mapImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Box = styled.div`
position: absolute;
top: 315px;
right: 13px;
  padding-top: 16px;
  padding-bottom: 17px;
  padding-left: 24px;
  padding-right: 24px;
  width: 291px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-color: ${globalColors.background};

  @media screen and (min-width: 768px) {
    top: 104px;
    right: 90px;
    padding-top: 15px;
    padding-bottom: 17px;
    padding-left: 13px;
    padding-right: 10px;
    width: 250px;
    border-radius: 13px;
  }

  @media screen and (min-width: 1440px) {
    top: 204px;
    right: 232px;
    padding-top: 22px;
    padding-bottom: 25px;
    padding-left: 33px;
    padding-right: 33px;
    width: 401px;
    border-radius: 25px;
  }
`;

export const Text = styled.p`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 500;
  color: ${globalColors.light};
  font-size: 13px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    letter-spacing: -0.3px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0;
  }
`;

export const Span = styled.span`
  font-family: 'eUkraine', sans-serif;
`;
