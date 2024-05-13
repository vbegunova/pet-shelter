import {
  Box,
  Container,
  Image,
  ImageBox,
  Item,
  List,
  Section,
  StyledLink,
  Text,
  Title,
} from './ContactsHelp.styled';
import sprite from '../../images/sprite.svg'

const ContactsHelp = () => {
  return (
    <Section>
      <Container>
        <Title>Як допомогти?</Title>
        <Box>
          <div>
            <Text>
              Є багато способів як допомогти хвостикам. Обирай той, який
              найкраще підходить для тебе.
            </Text>
            <List>
              <Item>Подарувати хвостику дім.</Item>
              <Item>Допомогти речами.</Item>
              <Item>Стати волонтером.</Item>
              <Item>Взяти хвостика під опіку.</Item>
            </List>
            <StyledLink to="/help">Дізнатись більше</StyledLink>
          </div>
          <ImageBox>
            <Image>
              <use href={`${sprite}#icon-walk-dreaming`}></use>
            </Image>
          </ImageBox>
        </Box>
      </Container>
    </Section>
  );
};

export default ContactsHelp;
