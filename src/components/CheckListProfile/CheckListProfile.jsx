import {
  SecondText,
  Section,
  Span,
  Text,
  TextBox,
  Title,
} from './CheckListProfile.styled';

const CheckListProfile = () => {
  return (
    <Section>
      <Title>
        Профіль ідеального
        <br />
        <Span>опікуна</Span>
      </Title>
      <TextBox>
        <Text>
          Відданий догляду та готовий надати безмежну любов своєму новому
          улюбленцю · Здатний взяти на себе відповідальність за забезпечення
          всебічного догляду та безпеки тварини · Маєш достатньо часу та енергії
          для створення активного та щасливого життя для тварини · Розумієш, що
          адопція тварини - це довгострокове зобов'язання та готовий прийняти
          всі відповідальність за свого нового улюбленця.
        </Text>
        <SecondText>
          Якщо ці якості описують вас, то вам точно до нас!
        </SecondText>
      </TextBox>
    </Section>
  );
};

export default CheckListProfile;
