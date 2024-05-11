import sprite from '../../images/sprite.svg';
import {
  Container,
  FirstText,
  Image,
  Section,
  StyledLink,
  Text,
  Title,
} from './AboutUsFindFriend.styled';

const AboutUsFindFriend = () => {
  return (
    <Section>
      <Container>
        <Title>Знайди свого чотирилапого друга</Title>
        <FirstText>
          Любов безмежна, а найбільше вона сяє у тих митях, коли ти даруєш її
          іншій живій істоті. У нашому притулку ми віримо в те, що кожен має
          право на щасливе життя та відданого друга. Чекаючі на тебе – це
          безпритульні тварини, які готові до полноцінного життя.
        </FirstText>
        <FirstText>
          Запрошуємо тебе стати частиною цього чудового процесу – взяти додому
          нового друга, який готовий поділитися своєю радістю та вірністю. Наші
          підопічні готові стати членами твоєї родини, принести в дім радість та
          неповторні миті тепла.
        </FirstText>
        <Text>
          Прийди та знайди того, кого ти чекаєш. Адопція – це не лише акт
          любові, але і шлях до створення незабутніх спогадів. Разом ми можемо
          змінити життя, один лагідний погляд та щира посмішка назавжди
          залишаться з тобою.
        </Text>
        <StyledLink to="/help">Підібрати друга</StyledLink>
        <Image>
          <use href={`${sprite}#icon-dog-walking-2`}></use>
        </Image>
      </Container>
    </Section>
  );
};

export default AboutUsFindFriend;
