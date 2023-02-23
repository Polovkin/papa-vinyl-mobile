import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

export const resources = {
  en: {
    ui: require('../../src/localization/en/ui.json'),
    common: require('../../src/localization/en/common.json'),
  },
  ru: {
    ui: require('../../src/localization/ru/ui.json'),
    common: require('../../src/localization/ru/common.json'),
  },
  ua: {
    ui: require('../../src/localization/ua/ui.json'),
    common: require('../../src/localization/ua/common.json'),
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
