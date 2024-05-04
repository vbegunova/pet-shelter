import {
  Container,
  Item,
  ItemTitle,
  List,
  MoreBtn,
  Section,
  Title,
} from './NewsSection.styled';

const NewsSection = () => {
  return (
    <Section>
      <Container>
        <Title>Новини</Title>
        <List>
          <Item>
            <ItemTitle>Який корм накращий для вашого улюбленця?</ItemTitle>
            <MoreBtn>Детальніше</MoreBtn>
          </Item>
          <Item>
            <ItemTitle>Кращий нашийник для вашого улюбленця</ItemTitle>
            <MoreBtn>Детальніше</MoreBtn>
          </Item>
          <Item>
            <ItemTitle>
              Кішка вистрибнула з 15 поверху, але залишилася жива
            </ItemTitle>
            <MoreBtn>Детальніше</MoreBtn>
          </Item>
        </List>
      </Container>
    </Section>
  );
};

export default NewsSection;
