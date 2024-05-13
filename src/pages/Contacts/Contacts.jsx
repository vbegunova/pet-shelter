import { useEffect } from 'react';
import ContactsHero from '../../components/ContactsHero';
import { globalColors } from '../../Styled/GlobalColors';
import MapSection from '../../components/MapSection';
import ContactsHelp from '../../components/ContactsHelp';

const Contacts = () => {
  useEffect(() => {
    document.body.style.backgroundColor = globalColors.light;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <ContactsHero />
      <MapSection />
      <ContactsHelp />
    </>
  );
};

export default Contacts;
