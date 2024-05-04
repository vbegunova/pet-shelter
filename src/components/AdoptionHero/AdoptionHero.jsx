import {
  ButtonIcon,
  ButtonText,
  CheckListContainer,
  Container,
  Section,
  StyledLink,
  Text,
  Title,
} from './AdoptionHero.styled';
import sprite from '../../images/sprite.svg';
import CheckListSection from '../../components/CheckListSection';

const AdoptionHero = () => {
  return (
    <Section>
      <Container>
        <Title>
          Любов на чотирьох лапах: Змініть своє життя, прихистивши нового друга
        </Title>
        <Text>
          Ласкаво просимо до нашого світу, де кожен маленький хвостик має
          історію чекання на своє щасливе життя. У нашій програмі адопції ви не
          лише знайдете вірного компаньйона, але й відкриєте для себе безмежну
          радість і любов, яку може подарувати бездомний улюбленець. Оберіть
          адопцію, і дайте хвостатому другові новий початок – наповнений теплом,
          відданістю та безмежною радістю вашого серця.
        </Text>
        <StyledLink to="/adoption">
          <ButtonText>
            <use href={`${sprite}#icon-home-hero-btn-text`}></use>
          </ButtonText>
          <ButtonIcon>
            <use href={`${sprite}#icon-paw`}></use>
          </ButtonIcon>
        </StyledLink>
      </Container>
      <CheckListContainer>
        <CheckListSection />
      </CheckListContainer>
    </Section>
  );
};

export default AdoptionHero;
