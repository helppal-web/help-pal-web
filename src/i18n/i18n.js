import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEN from './en/en.json'
import translationsHE from './he/he.json'
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationsEN
  },
  he: {
    translation: translationsHE
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;