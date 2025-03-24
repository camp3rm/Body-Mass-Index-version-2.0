
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
	);
};
export default Button