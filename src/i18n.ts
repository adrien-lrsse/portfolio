import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";


i18n
.use(i18nBackend) // Charge les fichiers via HTTP
.use(initReactI18next)
.init({
    backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // Chemin des fichiers
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['navbar', 'core_components', 'timeline'],
    defaultNS: 'common',
    interpolation: {
    escapeValue: false,
    },
});

export default i18n;

