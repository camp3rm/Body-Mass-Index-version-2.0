import './Header.css';
import logo from "../assets/img/bmi48px.png";
import React, { useState, useEffect } from 'react';
import "../i18n";
import { useTranslation } from "react-i18next";

function Header() {
  const [changeLang, setChangeLang] = useState(() => {
    return localStorage.getItem("language") || "pl";
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("language", changeLang ? changeLang : "");
  }, [changeLang])
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    setChangeLang(selectedLanguage);
  }

  return (
    <header className="App-header">
      <a href='https://fastbmi-checker.netlify.app/'><img src={logo} alt="BMI-logo" className="logo" /></a>
      <span className='bmi-header'>{t("header.bodyMassIndex")}</span>
      <select className='language' value={changeLang} onChange={handleLanguageChange}>
        <option value="ua">UA</option>
        <option value="pl">PL</option>
        <option value="en">EN</option>
      </select>
    </header>
  );
}

export default Header;
