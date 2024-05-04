import AdoptionHero from '../../components/AdoptionHero';
import { globalColors } from '../../Styled/GlobalColors';
import { useEffect } from 'react';
import AdoptionFindFriend from '../../components/AdoptionFindFriend';
import AdoptionHelp from '../../components/AdoptionHelp';

const Adoption = () => {
  useEffect(() => {
    document.body.style.backgroundColor = globalColors.light;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <AdoptionHero />
      <AdoptionFindFriend />
      <AdoptionHelp />
    </>
  );
};

export default Adoption;
