import { useEffect, useState } from 'react';
import PetItem from '../PetItem';
import {
  Section,
  Container,
  Title,
  List,
  MoreButton,
} from './FindFriend.styled';
import { fetchCats } from 'services/api';

const FindFriend = () => {
  const [cats, setCats] = useState([]);
  const limit = 3;

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchCats(limit);
        setCats(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <Section>
      <Container>
        <Title>Знайти друга</Title>
        <List>
          {cats.map(({ _id, name, sex, age }) => {
            return <PetItem key={_id} id={_id} name={name} sex={sex} age={age}/>;
          })}
          {/* <PetItem />
          <PetItem />
          <PetItem />
          <PetItem />
          <PetItem />
          <PetItem /> */}
        </List>
        <MoreButton to="/adoption">Усі хвостики</MoreButton>
      </Container>
    </Section>
  );
};

export default FindFriend;
