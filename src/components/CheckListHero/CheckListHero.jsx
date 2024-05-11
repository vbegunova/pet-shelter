import CheckListProfile from '../CheckListProfile';
import sprite from '../../images/sprite.svg';
import {
  Container,
  Image,
  Section,
  Span,
  Text,
  Title,
} from './CheckListHero.styled';

const CheckListHero = () => {
  return (
    <Section>
      <Container>
        <Title>
          Правила
          <br />
          <Span>адопції </Span>
        </Title>
        <Text>
          Якщо ви мрієте подарувати дім чотирилапому другу, вам слід
          ознайомитися з основними правилами.
        </Text>
        <Image>
          <use href={`${sprite}#icon-friends`}></use>
        </Image>
        <CheckListProfile />
      </Container>
    </Section>
  );
};

export default CheckListHero;
