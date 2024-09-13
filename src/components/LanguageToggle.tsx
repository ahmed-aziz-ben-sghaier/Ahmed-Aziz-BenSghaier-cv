import React, {FC} from 'react';

import {useLanguage} from '../contexts/LanguageContext';

const LanguageToggle: FC = React.memo(() => {
  const {language, setLanguage} = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
    console.log(`Language changed to: ${language === 'en' ? 'fr' : 'en'}`);
  };

  return (
    <button className=" transform items-center gap-2 text-lg font-bold text-white" onClick={toggleLanguage}>
      {language === 'en' ? (
        <div>
          <div className="flex justify-center gap-1">
            Hello <div className=" -mt-2 inline-block text-3xl">👋</div>
          </div>
          <div>
            ( Changer en Francais
            <img alt="English" className="ml-2 inline-block h-5 w-5" src="/assets/french.png" /> )
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center gap-1">
            Bonjour <div className=" -mt-2 inline-block text-3xl">👋</div>
          </div>
          <div>
            ( Switch to English
            <img alt="English" className="ml-2 inline-block h-5 w-5" src="/assets/english.png" /> )
          </div>
        </div>
      )}
    </button>
  );
});

export default LanguageToggle;
