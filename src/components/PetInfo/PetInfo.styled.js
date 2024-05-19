import { ContainerStyled } from '../../Styled/ContainerStyled';
import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 106px;
  padding-bottom: 81px;

  @media screen and (min-width: 768px) {
    padding-top: 141px;
    padding-bottom: 73px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 264px;
    padding-bottom: 93px;
  }
`;

export const Container = styled.div`
  ${ContainerStyled}

  @media screen and (min-width: 768px) {
    padding-left: 53px;
    padding-right: 53px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const Title = styled.h1`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  margin-bottom: 45px;
  letter-spacing: -0.3px;
  color: ${globalColors.title};
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 56px;
    font-size: 53px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 104px;
    font-size: 100px;
  }
`;

export const ImageBox = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 94px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 237px;
  border-radius: 31px;
  background-color: ${globalColors.secondaryLightText};

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 402px;
    height: 316px;
  }

  @media screen and (min-width: 1440px) {
    width: 754px;
    height: 593px;
  }
`;

export const SecondImage = styled.div`
  display: none;
  background-color: ${globalColors.secondaryLightText};

  @media screen and (min-width: 768px) {
    display: block;
    width: 245px;
    height: 250px;
    margin-bottom: auto;
    border-radius: 25px;
  }

  @media screen and (min-width: 1440px) {
    width: 460px;
    height: 468px;
    border-radius: 47px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 65px;
  font-size: 16px;
  padding-bottom: 5px;
  border: none;

  @media screen and (min-width: 768px) {
    width: 245px;
    height: 55px;
    font-size: 13px;
    letter-spacing: -0.3px;
    border-radius: 53px;
    padding-bottom: 5px;
  }

  @media screen and (min-width: 1440px) {
    width: 460px;
    height: 104px;
    font-size: 25px;
    border-radius: 100px;
    padding-bottom: 10px;
  }
`;

export const InfoBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Subtitle = styled.h2`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 32px;
  margin-bottom: 20px;
  letter-spacing: -0.3px;
  color: ${globalColors.title};
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 38px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 36px;
    font-size: 68px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    align-items: start;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    gap: 30px;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: start;
  }
`;

export const InfoTitle = styled.p`
  font-family: 'eUkraine', sans-serif;
  font-weight: 500;
  font-size: 25px;
  letter-spacing: -3px;
  color: ${globalColors.title};

  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 2px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 55px;
  }
`;

export const InfoDescription = styled.p`
  font-family: 'eUkraine', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: -0.6px;
  color: #2f2e41;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-family: 'eUkraine', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.3px;
  line-height: 1.2;
  color: ${globalColors.text};
  margin-bottom: 29px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    text-align: left;
    margin-bottom: 25px;
    font-size: 15px;
    line-height: 1.4;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    margin-bottom: 45px;
  }
`;

export const BehaviorBox = styled.div`
  width: 100%;
  padding: 30px 20px 35px;
  text-align: center;
  background-color: ${globalColors.background};
  border-radius: 25px;
  margin-bottom: 37px;

  @media screen and (min-width: 768px) {
    width: 350px;
    text-align: left;
    padding: 29px 24px 33px;
    border-radius: 27px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: 654px;
    padding: 54px 45px 62px;
    border-radius: 50px;
    margin-bottom: 52px;
  }
`;

export const BehaviorTitle = styled.p`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 25px;
  margin-bottom: 16px;
  letter-spacing: -0.3px;
  color: ${globalColors.light};
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    font-size: 27px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 18px;
    font-size: 51px;
  }
`;

export const BehaviorText = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.3px;
  color: ${globalColors.light};
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const CondTitle = styled.p`
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 800;
  font-size: 25px;
  margin-bottom: 18px;
  letter-spacing: -0.3px;
  color: ${globalColors.title};
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    font-size: 22px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 18px;
    font-size: 41px;
  }
`;

export const CondText = styled.p`
  font-family: 'Hagrid Text Trial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.3px;
  color: #2f2e41;
  margin-bottom: 17px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 23px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 30px;
    margin-bottom: 44px;
  }
`;

export const Button = styled.button`
  width: 237px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColors.accent};
  color: ${globalColors.light};
  font-family: 'Hagrid Trial', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 51px;
  font-size: 13px;
  padding-bottom: 3px;
  border: none;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 246px;
    height: 55px;
    font-size: 14px;
    letter-spacing: -0.2px;
    border-radius: 53px;
    padding-bottom: 5px;
    margin-left: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 462px;
    height: 104px;
    font-size: 25px;
    border-radius: 100px;
    padding-bottom: 10px;
  }
`;

export const RightBox = styled.div`
  @media screen and (min-width: 768px) {
    width: 350px;
  }

  @media screen and (min-width: 1440px) {
    width: 654px;
  }
`;