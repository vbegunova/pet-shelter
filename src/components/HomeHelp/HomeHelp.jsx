import {
  SectionHelp,
  HelpTitle,
  HelpSubtitle,
  HelpList,
  HelpItem,
  StyledLink,
  HelpImage,
  BgLine,
} from './HomeHelp.styled';
import sprite from '../../images/sprite.svg';

const HomeHelp = () => {
  return (
    <SectionHelp>
      <HelpTitle>Як допомогти?</HelpTitle>
      <HelpSubtitle>
        Є багато способів як допомогти хвостикам Обирай той, який найкраще
        підходить для тебе!
      </HelpSubtitle>
      <HelpList>
        <HelpItem>Подарувати хвостику дім</HelpItem>
        <HelpItem>Допомогти речами</HelpItem>
        <HelpItem>Стати волонтером</HelpItem>
        <HelpItem>Взяти хвостика під опіку</HelpItem>
      </HelpList>
      <HelpImage>
        <use href={`${sprite}#icon-cat`}></use>
      </HelpImage>
      <StyledLink to="/help">Дізнатись більше</StyledLink>
      <BgLine>
        <use href={`${sprite}#icon-line-first`}></use>
      </BgLine>
    </SectionHelp>
  );
};

export default HomeHelp;
