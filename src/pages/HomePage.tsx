import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import HomePageContent from '../components/HomepageContent/HomePageContent';
import { useLocation } from 'react-router-dom';
import CookiesModal from '../components/CookiesModal/CookiesModal';
import { StyledSection } from '../styles/reusableStyles';
import { setCookieConsent } from '../store/slices/cookiesSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const consentGiven = useAppSelector(state => state.cookies.consentGiven);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/me' && !consentGiven) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, consentGiven]);

  useEffect(() => {
    const consentString = localStorage.getItem('cookieConsent');
    const consent = consentString
      ? JSON.parse(consentString).consentGiven
      : false;
    dispatch(setCookieConsent(consent));
  }, [dispatch]);

  const handleAccept = () => {
    const consentInfo = {
      consentGiven: true,
      date: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentInfo));
    dispatch(setCookieConsent(true));
    setShowModal(false);
  };

  return (
    <StyledSection>
      <HomePageContent />
      {showModal && <CookiesModal onClick={handleAccept} />}
    </StyledSection>
  );
};

export default HomePage;
