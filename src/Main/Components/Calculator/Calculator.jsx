import React, { useState, useEffect, useRef } from 'react';
import './Calculator.css'
import Button from '../Button/Button.jsx';
import Table from '../ClassificationTable/table.jsx';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

function Calculator() {
	const [showClassification, setShowClassification] = useState(false);
	const [bmi, setBmi] = useState(null);
	const { t, i18n } = useTranslation();
	const inputHeightRef = useRef(null);
	const inputWeightRef = useRef(null);

	const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm({ mode: "onChange" });

	const onSubmit = (data) => {
		const { weight, height } = data;
		trigger(weight);
		trigger(height);
		const correctWeight = parseFloat(weight.replace(",", "."));
		const correctHeight = parseFloat(height.replace(",", "."));
		const bmi = (correctWeight / (correctHeight ** 2)).toFixed(2);
		setBmi(bmi);
	}

	useEffect(() => {
		inputHeightRef.current.focus();
		inputWeightRef.current.focus();
		if (!!bmi) {
			const showTimer = setTimeout(() => {
				setShowClassification(!showClassification)
			}, 3_000)
			return () => {
				clearTimeout(showTimer);
			};
		}

	}, [bmi]);

	useEffect(() => {
		trigger();
	}, [i18n.language, trigger])

	const resetInput = () => {
		reset();
		setBmi("");
		setShowClassification(false);
	}

	return (
		<div className='summary-report'>
			<form onSubmit={handleSubmit(onSubmit)} className='calculator'>
				<div className='unit-container'>
					<label htmlFor='weight' className='weight-label'>{t("main.calculator.your-weight")}</label>
					<input
						{...register("weight", {
							required: t("main.validation.weight.required"),
							minLength: {
								value: 2,
								message: t("main.validation.weight.minCharacters")
							},
							maxLength: {
								value: 4,
								message: t("main.validation.weight.maxCharacters")
							},
							validate: (value) => {
								if (!/^[1-9]\d{0,2}(?:[.,]\d+)?$/.test(value)) {
									return t("main.validation.weight.valid");
								}
								return true
							}
						})}
						ref={inputWeightRef}
						placeholder={t("main.validation.weight.placeholder")}
						name='weight'
						type="text"
						className="weight"
						disabled={!!bmi}
					/>
					{errors.weight && <p className="error-message">{errors.weight.message}</p>}
				</div>
				<div className='unit-container'>
					<label htmlFor='height' className='height-label'>{t("main.calculator.your-height")}</label>
					<input
						{...register("height", {
							required: t("main.validation.height.required"),
							minLength: {
								value: 2,
								message: t("main.validation.height.minCharacters")
							},
							maxLength: {
								value: 4,
								message: t("main.validation.height.maxCharacters")
							},

							validate: (value) => {
								if (!/^[1-2](?:[.,]\d{1,2})$/.test(value)) {
									return t("main.validation.height.valid");
								}
								return true
							}

						})}
						ref={inputHeightRef}
						placeholder={t("main.validation.height.placeholder")}
						name='height'
						type="text"
						className="height"
					/>
					{errors.height && <p className="error-message">{errors.height.message}</p>}
				</div>
				<Button
					type='submit'
					text="main.button.calculate"
					className='calculate-btn'
					disabled={!!bmi}
				/>
			</form>
			{!!bmi && <div className='result'>
				<span className='result-field'>{t("main.calculator.result")} {bmi}</span>
			</div>
			}
			{!!bmi && showClassification && <Table />}
			{!!bmi && showClassification && <Button
				type='button'
				text="main.button.reset"
				onClick={resetInput}
				className='calculate-btn-reload' />}
		</div>

	);
};
export default Calculator