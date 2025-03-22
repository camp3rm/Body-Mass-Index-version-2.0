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

export default Footer