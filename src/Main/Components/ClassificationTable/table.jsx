import React from "react";
import './table.css';
import { useTranslation } from "react-i18next";;

const Table = () => {
	const { t } = useTranslation();

	return (
		<table className="classification-table">
			<thead>
				<th className="indicator">BMI
					({t("units.unitBmi")}) </th>
				<th className="body-mass">{t("main.table.bodyWeight")}</th>
				<th className="risk-of-disease">{t("main.table.riskOfDisease")}</th>
			</thead>
			<tbody>
				<tr>
					<td className="indicator">&#60;18,5</td>
					<td className="body-mass">
						{t("main.table.underweight")}</td>
					<td className="risk-of-disease">
						{t("main.table.underweight_risk")}</td>
				</tr>
				<tr>
					<td className="indicator">18,5 - 24,99</td>
					<td className="body-mass">
						{t("main.table.optimum")}</td>
					<td className="risk-of-disease">{t("main.table.optimum_risk")}
					</td>
				</tr>
				<tr>
					<td className="indicator">25,0 - 29,99</td>
					<td className="body-mass">
						{t("main.table.overweight")}</td>
					<td className="risk-of-disease">{t("main.table.overweight_risk")}</td>
				</tr>
				<tr>
					<td className="indicator">&#62;30,0</td>
					<td className="body-mass">{t("main.table.obesity")}</td>
					<td className="risk-of-disease">{t("main.table.obesity_risk")}</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Table