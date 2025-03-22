<<<<<<< HEAD
import React, { useState } from 'react';
import Description from './Components/Description/Description';
import Calculator from './Components/Calculator/Calculator.jsx';
import Button from './Components/Button/Button.jsx';
import './main.css';
import { useTranslation } from "react-i18next";;


function Main() {
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = useState(false);

	const handleVisible = () => {
		setIsVisible(!isVisible);
	}



	return (
		<main className='App-main'>
			<h2 className='title'>BMI (ang. body
				mass index)</h2>
			{isVisible ? <Calculator /> : <Description />}
			{isVisible ? null : <Button className='open-calculator' type='button' text={t("main.button.openCalculator")} onClick={handleVisible} />}
		</main>
	)
}


=======
import React, { useState } from 'react';
import Description from './Components/Description/Description';
import Calculator from './Components/Calculator/Calculator.jsx';
import Button from './Components/Button/Button.jsx';
import './main.css';
import { useTranslation } from "react-i18next";;


function Main() {
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = useState(false);

	const handleVisible = () => {
		setIsVisible(!isVisible);
	}



	return (
		<main className='App-main'>
			<h2 className='title'>BMI (ang. body
				mass index)</h2>
			{isVisible ? <Calculator /> : <Description />}
			{isVisible ? null : <Button className='open-calculator' type='button' text={t("main.button.openCalculator")} onClick={handleVisible} />}
		</main>
	)
}


>>>>>>> 32af816a3f995559d27eabab18c5f105ee8f9ad3
export default Main