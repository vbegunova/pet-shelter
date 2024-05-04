import {
  Container,
  Item,
  List,
  MoreBtn,
  Section,
  Subtitle,
  Title,
  TitleBox,
} from './AdoptionHelp.styled';

const AdoptionHelp = () => {
  return (
    <Section>
      <Container>
        <TitleBox>
          <Title>Хочете допомогти?</Title>
          <Subtitle>
            Є багато способів як допомогти хвостикам. Обирай той, який найкраще
            підходить для тебе.
          </Subtitle>
        </TitleBox>
        <List>
          <Item>Подарувати хвостику дім.</Item>
          <Item>Взяти хвостика під опіку.</Item>
          <Item>Допомогти речами.</Item>
          <Item>Стати волонтером.</Item>
        </List>
        <MoreBtn to="/help">Дізнатись більше</MoreBtn>
      </Container>
    </Section>
  );
};

export default AdoptionHelp;
