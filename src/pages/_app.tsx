import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import {memo} from 'react';

import {LanguageProvider} from '../contexts/LanguageContext';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
});

export default dynamic(() => Promise.resolve(MyApp), {ssr: false});
