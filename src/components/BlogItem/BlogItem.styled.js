import { NavLink } from 'react-router-dom';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const ItemContainer = styled.li`
  width: 300px;
  height: 293px;
  background-color: ${globalColors.newsCardBg};
  border-radius: 30px;
  padding: 196px 18px 17px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 23px) / 2);
    height: 320px;
    border-radius: 34px;
    padding: 219px 20px 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 597px;
    height: 571px;
    border-radius: 60px;
    padding: 391px 36px 36px;
  }
`;

export const ItemTitle = styled.h3`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 800;
  font-size: 12px;
  color: ${globalColors.title};
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const MoreBtn = styled(NavLink)`
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-size: 9px;
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  width: 118px;
  height: 40px;
  border-radius: 40px;
  padding-bottom: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 113px;
    height: 38px;
    border-radius: 38px;
  }

  @media screen and (min-width: 1440px) {
    width: 201px;
    height: 69px;
    border-radius: 68px;
    font-size: 16px;
    padding-bottom: 5px;
  }
`;
