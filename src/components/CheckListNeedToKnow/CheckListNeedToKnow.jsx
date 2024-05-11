import sprite from '../../images/sprite.svg'
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
} from './CheckListNeedToKnow.styled';

const CheckListNeedToKnow = () => {
  return (
    <Section>
      <Container>
        <Title>Що потрібно знати?</Title>
        <Box>
          <ImageBox>
            <Image>
              <use href={`${sprite}#icon-check-list-help`}></use>
            </Image>
          </ImageBox>
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
        </Box>
      </Container>
    </Section>
  );
};

export default CheckListNeedToKnow;
