import React from 'react';
import './Description.css';
import { useTranslation } from "react-i18next";
function Description() {
	const { t } = useTranslation();

	return <>
		<article className="about">
			<p className="about-BMI">
				<strong>{t("main.description.aboutBMI")} (ang.
					body
					mass index, BMI)</strong>, {t("main.description.aboutBMI_text")}</p>
		</article>
		<div className='general-table'>
			<p className="desired-BMI">{t("main.description.desiredBMI")}</p>
			<ul className="desired-BMI-list">
				<li className="desired-age-BMI">
					19 – 24 <span className='ages'>{t("main.description.age")}</span>:
					19 – 24 {t("units.unit")}<sup>2</sup></li>
				<li className="desired-age-BMI">
					25 – 34 <span className='ages'>{t("main.description.age")}</span>:
					20 – 25 {t("units.unit")}<sup>2</sup></li>
				<li className="desired-age-BMI">
					35 – 44 <span className='ages'>{t("main.description.age")}</span>:
					21 – 26 {t("units.unit")}<sup>2</sup></li>
				<li className="desired-age-BMI">
					45 – 54 <span className='ages'>{t("main.description.age")}</span>:
					22 – 27 {t("units.unit")}<sup>2</sup></li>
				<li className="desired-age-BMI">
					55 – 64 <span className='ages'>{t("main.description.age")}</span>:
					23 – 28 {t("units.unit")}<sup>2</sup></li>
				<li className="desired-age-BMI">
					{t("main.description.over")} 64 <span className='ages'>{t("main.description.age")}</span>:
					24 – 29 {t("units.unit")}<sup>2</sup></li>
			</ul>
		</div>
		<div className="expression">
			<p className="expression-description">{t("main.description.expression_description")}</p>

			<div className='formula'>
				<div className='metric-system'>
					<span>BMI (metric system) =</span>
					<div className='fraction'>
						<span className='numerator'>weight(kg)</span>
						<span className='denominator'>height<sup>2</sup>(m<sup>2</sup>)</span>
					</div>
				</div>
				<div className='imperial-system'>
					<span>BMI (imperial system) =</span>
					<div className='fraction'>
						<span className='numerator'>703 * weight (lb)</span>
						<span className='denominator'>height<sup>2</sup> (inch<sup>2</sup>)</span>
					</div>
				</div>
			</div>
		</div>
	</>


}

export default Description;