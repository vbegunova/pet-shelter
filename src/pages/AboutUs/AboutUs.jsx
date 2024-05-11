import { useEffect } from 'react';
import AboutUsHero from '../../components/AboutUsHero';
import AboutUsGoals from '../../components/AboutUsGoals';
import { globalColors } from '../../Styled/GlobalColors';
import AboutUsFamily from '../../components/AboutUsFamily';
import AboutUsDoMore from '../../components/AboutUsDoMore';
import AboutUsHelp from '../../components/AboutUsHelp';
import AboutUsFindFriend from '../../components/AboutUsFindFriend';

const AboutUs = () => {
  useEffect(() => {
    document.body.style.backgroundColor = globalColors.light;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <AboutUsHero />
      <AboutUsGoals />
      <AboutUsFamily />
      <AboutUsDoMore />
      <AboutUsHelp />
      <AboutUsFindFriend />
    </>
  );
};

export default AboutUs;
