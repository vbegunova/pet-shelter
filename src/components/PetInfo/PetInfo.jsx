import { useParams } from 'react-router-dom';
import {
  Container,
  Image,
  ImageBox,
  SecondImage,
  Section,
  StyledButton,
  Title,
  Box,
  InfoBox,
  Subtitle,
  InfoList,
  InfoItem,
  InfoTitle,
  InfoDescription,
  Text,
  BehaviorBox,
  BehaviorTitle,
  BehaviorText,
  CondTitle,
  CondText,
  Button,
  RightBox,
} from './PetInfo.styled';
import { useEffect, useState } from 'react';
import { fetchOnePet } from 'services/api';

const PetInfo = () => {
  const { petId } = useParams();
  console.log(petId);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchOnePet(petId);
        setData(resp);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [petId]);

  const { name, sex, age, breed, color } = data;
  return (
    <Section>
      <Container>
        <Title>{name}</Title>
        <ImageBox>
          <Image></Image>
          <Box>
            <SecondImage></SecondImage>
            <StyledButton>Усиновити</StyledButton>
          </Box>
        </ImageBox>
        <InfoBox>
          <div>
            <Subtitle>Про друга</Subtitle>
            <InfoList>
              <InfoItem>
                <InfoTitle>{sex === "Жіноча" ? "Дівчинка" : "Хлопчик"}</InfoTitle>
                <InfoDescription>Стать</InfoDescription>
              </InfoItem>
              <InfoItem>
                <InfoTitle>{age}</InfoTitle>
                <InfoDescription>Вік</InfoDescription>
              </InfoItem>
              <InfoItem>
                <InfoTitle>{breed}</InfoTitle>
                <InfoDescription>Порода</InfoDescription>
              </InfoItem>
              <InfoItem>
                <InfoTitle>{color}</InfoTitle>
                <InfoDescription>Забарвлення</InfoDescription>
              </InfoItem>
              <InfoItem>
                <InfoTitle>Не стерилізовано</InfoTitle>
                <InfoDescription>Стерилізація</InfoDescription>
              </InfoItem>
              <InfoItem>
                <InfoTitle>Відсутня</InfoTitle>
                <InfoDescription>Наявність вакцинації</InfoDescription>
              </InfoItem>
              <InfoItem>
                <InfoTitle>Харків</InfoTitle>
                <InfoDescription>Населений пункт</InfoDescription>
              </InfoItem>
            </InfoList>
          </div>
          <RightBox>
            <Subtitle>Коротка історія</Subtitle>
            <Text>
              Руденьке диво-хлопчик шукає дім та люблячу сім'ю. Малеча живе на
              вулиці у покинутій школі в небезпеці. Їсть усе. Оброблене від
              паразитів. Допоможемо з кастрацієй, якщо буде треба
            </Text>
            <BehaviorBox>
              <BehaviorTitle>Особливості поведінки</BehaviorTitle>
              <BehaviorText>Дружелюбний, але обережний</BehaviorText>
            </BehaviorBox>
            <CondTitle>Умови прилаштування</CondTitle>
            <CondText>Квартира, або дім з базовими умовами для життя</CondText>
            <Button>Усиновити</Button>
          </RightBox>
        </InfoBox>
      </Container>
    </Section>
  );
};

export default PetInfo;
