<<<<<<< HEAD
import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";



function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="App-footer">
			<p className='gratitude'>{t("footer.gratitude")}</p>
			<span className='rodo'>&copy; {t("footer.rodo")}</span>
		</footer>
	)
}

=======
import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";



function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="App-footer">
			<p className='gratitude'>{t("footer.gratitude")}</p>
			<span className='rodo'>&copy; {t("footer.rodo")}</span>
		</footer>
	)
}

>>>>>>> 32af816a3f995559d27eabab18c5f105ee8f9ad3
export default Footer