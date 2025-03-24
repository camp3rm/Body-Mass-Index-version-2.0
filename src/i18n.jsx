import en from './assets/translate/en.json';
import ua from './assets/translate/ua.json';
import pl from './assets/translate/pl.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	debug: true,
	fallbackLng: localStorage.getItem("language") || "pl",
	resources: {
		en: {
			translation: en,
		},
		ua: {
			translation: ua,
		},

		pl: {
			translation: pl,

		}
	},
});
export default i18n;