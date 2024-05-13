import {
  Box,
  Button,
  ButtonsContainer,
  Container,
  Section,
  SocMediaIcon,
  SocMediaItem,
  SocMediaList,
  Title,
} from './ContactsHero.styled';
import sprite from '../../images/sprite.svg';

const ContactsHero = () => {
  return (
    <Section>
      <Container>
        <Title>Контакти</Title>
        <Box>
          <SocMediaList>
            <li>
              <SocMediaItem>
                <SocMediaIcon>
                  <use href={`${sprite}#icon-instagram`}></use>
                </SocMediaIcon>
              </SocMediaItem>
            </li>
            <li>
              <SocMediaItem>
                <SocMediaIcon>
                  <use href={`${sprite}#icon-facebook`}></use>
                </SocMediaIcon>
              </SocMediaItem>
            </li>
            <li>
              <SocMediaItem>
                <SocMediaIcon>
                  <use href={`${sprite}#icon-telegram`}></use>
                </SocMediaIcon>
              </SocMediaItem>
            </li>
            <li>
              <SocMediaItem>
                <SocMediaIcon>
                  <use href={`${sprite}#icon-viber`}></use>
                </SocMediaIcon>
              </SocMediaItem>
            </li>
          </SocMediaList>
          <ButtonsContainer>
            <Button>Подзвонити</Button>
            <Button>Надіслати лист</Button>
          </ButtonsContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default ContactsHero;
