import { Button, Icon, Section, Text, Title } from './HelpVolunteer.styled';
import sprite from '../../images/sprite.svg'

const HelpVolunteer = () => {
  return (
    <Section>
      <Title>Стати волонтером</Title>
      <Text>
        Бажаєте допомогти тим, хто потребує нашої підтримки найбільше? Стати
        волонтером для безпритульних тварин - це чудова можливість внести свій
        внесок у рятування та покращення життя тварин, які потрапили у складну
        життєву ситуацію. Наші волонтери - це серце нашої спільноти, які готові
        віддати свій час та енергію, щоб забезпечити безпечне та щасливе
        майбутнє для кожного бездомного улюбленця. Ваша підтримка може врятувати
        життя і змінити долю тварин, а також сприяти побудові кращого світу для
        всіх нас. Долучайтеся до нашої команди волонтерів сьогодні та станьте
        частиною позитивних змін у житті безпритульних тварин!
      </Text>
      <Button>Заповнити заявку</Button>
      <Icon>
        <use href={`${sprite}#icon-paw`}></use>
      </Icon>
    </Section>
  );
};

export default HelpVolunteer;
