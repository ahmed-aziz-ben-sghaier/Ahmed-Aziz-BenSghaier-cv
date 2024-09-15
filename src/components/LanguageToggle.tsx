import React, {FC} from 'react';

import {useLanguage} from '../contexts/LanguageContext';

interface LanguageToggleProps {
  navbar?: boolean;
}

const LanguageToggle: FC<LanguageToggleProps> = React.memo(({navbar = false}) => {
  const {language, setLanguage} = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      aria-label="Change language"
      className="transform items-center gap-2 text-lg font-bold text-white"
      onClick={toggleLanguage}>
      {navbar ? (
        <img
          alt={language === 'fr' ? 'English' : 'French'}
          className=" h-7 w-7"
          src={language === 'fr' ? '/assets/english.png' : '/assets/french.png'}
        />
      ) : (
        <div>
          {language === 'en' ? (
            <div>
              <div className="flex justify-center gap-1">
                Hello <div className=" -mt-2 inline-block text-3xl">👋</div>
              </div>
              <div>
                ( Changer en Français
                <img alt="French" className="ml-2 inline-block h-5 w-5" src="/assets/french.png" /> )
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-center gap-1">
                Bonjour <div className=" -mt-2 inline-block text-3xl">👋</div>
              </div>
              <div>
                (Switch to English
                <img alt="English" className="ml-2 inline-block h-5 w-5" src="/assets/english.png" /> )
              </div>
            </div>
          )}
        </div>
      )}
    </button>
  );
});

export default LanguageToggle;
