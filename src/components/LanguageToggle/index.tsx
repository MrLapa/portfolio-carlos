'use client'

import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles['language-toggle']}
      aria-label="Toggle language"
    >
      {currentLang === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageToggle; 