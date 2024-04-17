import { Section, Container, Title, List, MoreBtn } from "./BlogSection.styled";
import BlogItem from '../../components/BlogItem'

const BlogSection = () => {
  return (
    <Section>
      <Container>
        <Title>Наш блог</Title>
        <List>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </List>
        <MoreBtn to="/">Подивитись більше</MoreBtn>
      </Container>
    </Section>
  )
};

export default BlogSection;