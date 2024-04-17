import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Adoption = lazy(() => import('../pages/Adoption'));
const CheckList = lazy(() => import('../pages/CheckList'));
const Help = lazy(() => import('../pages/Help'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/check-list" element={<CheckList />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
