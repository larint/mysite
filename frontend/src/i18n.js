import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-fs-backend';
import { join } from 'path'

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: "vi",   //default language
        fallbackLng: "vi", //when specified language translations not present then fallbacklang translations loaded.
        debug: true,
        backend: {
            loadPath: '../public/assets/lang/en/translation.json',
            // path to post missing resources
            // addPath: '../public/assets/lang/{{lng}}/{{ns}}.missing.json',
        },
        /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
        ns: ["translation"],
        defaultNS: "translation",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ",",
        },
        react: {
            wait: true,
        },
    });

export default i18n;