import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
// import Loader from 'components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileMenu from '../../components/MobileMenu';

const SharedLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Header
        onOpen={() => setIsMobileMenuOpen(true)}
      />
      <main>
        <Suspense>
          {/* fallback={<Loader />} */}
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
};

export default SharedLayout;
