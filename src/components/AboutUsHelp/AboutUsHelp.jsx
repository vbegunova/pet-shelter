import sprite from '../../images/sprite.svg'
import {
  Box,
  Container,
  FirstText,
  Section,
  Text,
  Title,
  StyledLink,
  Image,
} from './AboutUsHelp.styled';

const AboutUsHelp = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Title>Хочете допомогти?</Title>
          <FirstText>
            Діліться з нами магічними моментами, коли найменший крок призводить
            до найбільшого щастя. Наші перемоги - це історії дружби та надії,
            які залишають невиліковні сліди в серцях наших тварин та нашої
            спільноти.
          </FirstText>
          <Text>
            Це наша історія, наповнена любов'ю, підтримкою та змінами.
            Приєднуйтеся до нас на цьому неймовірному шляху, де кожен може стати
            частиною чогось більшого - історії, яка залишить невимовне враження
            в душах тих, кому ми служимо.
          </Text>
          <StyledLink to="/contacts">Зв’язатись з нами</StyledLink>
        </Box>
        <Image>
          <use href={`${sprite}#icon-check-list-cat`}></use>
        </Image>
      </Container>
    </Section>
  );
};

export default AboutUsHelp;
