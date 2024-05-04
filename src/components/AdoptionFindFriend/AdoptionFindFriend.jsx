import PetItem from '../PetItem';
import {
  Section,
  Container,
  Title,
  List,
  MoreButton,
  BgLineFirst,
  Box,
} from './AdoptionFindFriend.styled';
import sprite from '../../images/sprite.svg';

const AdoptionFindFriend = () => {
  return (
    <Section>
      <Container>
        <Box>
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
        </Box>
        <BgLineFirst>
          <use href={`${sprite}#icon-line-first`}></use>
        </BgLineFirst>
      </Container>
    </Section>
  );
};

export default AdoptionFindFriend;
