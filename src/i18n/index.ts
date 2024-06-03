import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en.json';
import ptbr from './locales/ptbr.json';

const resources = {
  en: {
    translation: en
  },
  ptbr: {
    translation: ptbr
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ptbr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
