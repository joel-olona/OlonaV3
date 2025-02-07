import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <div className="language-switcher position-relative d-inline-block">
      <button 
        className="btn btn-link p-0 text-dark text-decoration-none d-flex align-items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="fs-4">{currentLanguage.flag}</span>
      </button>
      {isOpen && (
        <div className="position-absolute bg-white shadow-lg rounded-3 py-2" style={{ top: '100%', right: 0, zIndex: 1000, minWidth: '150px' }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`dropdown-item d-flex align-items-center px-3 py-2 ${lang.code === currentLanguage.code ? 'bg-light' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="me-2 fs-5">{lang.flag}</span>
              <span className="font-xssss">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
