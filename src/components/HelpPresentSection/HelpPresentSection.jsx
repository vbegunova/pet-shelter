import HelpVolunteer from '../../components/HelpVolunteer';
import {
  Container,
  Section,
  Title,
  TextBox,
  Box,
  Subtitle,
  Text,
  StyledLink,
} from './HelpPresentSection.styled';

const HelpPresentSection = () => {
  return (
    <Section>
      <Container>
        <Title>Подарувати хвостику дім</Title>
        <TextBox>
          <Box>
            <Subtitle>Зателефонуйте нам!</Subtitle>
            <StyledLink>+38 (066) 345 67 89</StyledLink>
          </Box>
          <Text>
            Відчуйте радість і щастя, яке приносить новий дом, адоптуючи
            безпритульного улюбленця. У нас є безліч тварин, які шукають люблячі
            руки та теплий дім, і одна з них може стати вашим найкращим другом
            на все життя. Адопція тварини - це не лише акт милосердя, а й
            можливість змінити світ і своє власне життя. Кожен безпритульний
            улюбленець має свою унікальну історію та особистість, і він готовий
            подарувати вам безмежну любов і відданість. Запрошуємо вас знайти
            свого нового друга серед наших чотирилапих улюбленців і подарувати
            йому той дім, який він заслуговує. Дозвольте собі стати частиною
            цієї надзвичайної подорожі і змінити світ одним улюбленцем за раз!
          </Text>
        </TextBox>
        <HelpVolunteer />
      </Container>
    </Section>
  );
};

export default HelpPresentSection;
