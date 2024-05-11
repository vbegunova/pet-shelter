import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
// import Loader from 'components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileMenu from '../../components/MobileMenu';

const SharedLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <>
      <Header onOpen={() => setIsMobileMenuOpen(true)} />
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
