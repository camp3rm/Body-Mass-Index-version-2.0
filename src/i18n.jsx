<<<<<<< HEAD
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

=======
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

>>>>>>> 32af816a3f995559d27eabab18c5f105ee8f9ad3
export default i18n;