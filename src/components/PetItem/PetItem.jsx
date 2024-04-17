import { Item, Name, Info, StyledLink, LinkIcon } from "./PetItem.styled";
import sprite from '../../images/sprite.svg';

const PetItem = () => {
  return (
    <Item>
      <Name>Тоша</Name>
      <Info>Хлопчик, 3 роки</Info>
      <StyledLink>Усиновити
        <LinkIcon>
          <use href={`${sprite}#icon-paw`}></use>
        </LinkIcon>
      </StyledLink>
    </Item>
  )
};

export default PetItem;