import { Box, Container, Span, Text } from './MapSection.styled';

const MapSection = () => {
  return (
    <section>
      <Container>
        <Box>
          <Text>
            Харківське шосе, <Span>3</Span>, Харків, Харківська область, <br/>
            Притулок для безхатніх тварин “Dog&Cat”
          </Text>
        </Box>
      </Container>
    </section>
  );
};

export default MapSection;
