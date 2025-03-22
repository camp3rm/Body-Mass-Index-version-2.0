<<<<<<< HEAD
import './Button.css';
import React from 'react';
import { useTranslation } from "react-i18next";

function Button(props) {
	const { t } = useTranslation();

	return (
		<button
			type={props.type}
			className={props.className}
			onClick={props.onClick}
			disabled={props.disabled}>
			{t(props.text)}
		</button>
	)
}

=======
import './Button.css';
import React from 'react';
import { useTranslation } from "react-i18next";

function Button(props) {
	const { t } = useTranslation();

	return (
		<button
			type={props.type}
			className={props.className}
			onClick={props.onClick}
			disabled={props.disabled}>
			{t(props.text)}
		</button>
	)
}

>>>>>>> 32af816a3f995559d27eabab18c5f105ee8f9ad3
export default Button