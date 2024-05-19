import { Item, Name, Info, StyledLink, LinkIcon } from './PetItem.styled';
import sprite from '../../images/sprite.svg';

const PetItem = ({ id, name, sex, age }) => {
  console.log(id);
  return (
    <Item key={id}>
      <Name>{name}</Name>
      <Info>
        {sex === 'Жіноча' ? 'Дівчинка' : 'Хлопчик'}, {age}
      </Info>
      <StyledLink to={`/adoption/${id}`}>
        Усиновити
        <LinkIcon>
          <use href={`${sprite}#icon-paw`}></use>
        </LinkIcon>
      </StyledLink>
    </Item>
  );
};

export default PetItem;
