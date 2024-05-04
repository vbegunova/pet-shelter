import PetItem from '../PetItem';
import {
  Section,
  Container,
  Title,
  List,
  MoreButton,
} from './FindFriend.styled';

const FindFriend = () => {
  return (
    <Section>
      <Container>
        <Title>Знайти друга</Title>
        <List>
          <PetItem />
          <PetItem />
          <PetItem />
          <PetItem />
          <PetItem />
          <PetItem />
        </List>
        <MoreButton to="/adoption">Усі хвостики</MoreButton>
      </Container>
    </Section>
  );
};

export default FindFriend;
