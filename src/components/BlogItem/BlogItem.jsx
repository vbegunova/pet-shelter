import { ItemContainer, ItemTitle, MoreBtn } from "./BlogItem.styled";

const BlogItem = () => {
  return (
    <ItemContainer>
      <ItemTitle>Який корм накращий для вашого улюбленця?</ItemTitle>
      <MoreBtn to="/">Читати допис</MoreBtn>
    </ItemContainer>
  )
};

export default BlogItem;