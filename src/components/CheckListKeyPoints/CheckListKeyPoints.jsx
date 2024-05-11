import sprite from '../../images/sprite.svg';
import {
  Box,
  Container,
  Image,
  LeftBox,
  LeftText,
  RightBox,
  Section,
  Span,
  StyledLink,
  Text,
  Title,
} from './CheckListKeyPoints.styled';

const CheckListKeyPoints = () => {
  return (
    <Section>
      <Container>
        <Title>
          <Span>
            Ключові пункти <br />
          </Span>
          для уваги
        </Title>
        <Box>
          <LeftBox>
            <LeftText>
              Усі тварини від 6 місяців - стерилізовані. Цуценята та кошенята
              віддаються тільки з умовою обов’язкою стерилізації після 6
              місяців.
            </LeftText>
            <LeftText>
              Ми не віддаємо тварин третім особам, на подарунки, а також для
              охорони підприємств.
            </LeftText>
            <StyledLink to="/adoption">Перейти до підбору хвостика</StyledLink>
          </LeftBox>
          <Image>
            <use href={`${sprite}#icon-check-list-dog`}></use>
          </Image>
          <RightBox>
            <Text>
              За хвостиком потрібно буде приїхати в притулок особисто. Випадки
              передачі тварин не на території притулку обговорюються в
              індивідуальному порядку. Також як і прилаштування тварин за межами
              Київської області.
            </Text>
            <Text>
              Якщо ви їдете за котиком, наявність переноски є обов’язковою. Якщо
              за песиком, наявність нашийника і повідка є обов’язковою.
            </Text>
          </RightBox>
        </Box>
      </Container>
    </Section>
  );
};

export default CheckListKeyPoints;
