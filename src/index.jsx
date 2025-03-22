import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer.jsx'
import reportWebVitals from './reportWebVitals';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
    <React.StrictMode>
      <Header />
      <Main />
      <Footer />
    </React.StrictMode>
  </div>
);

reportWebVitals();
