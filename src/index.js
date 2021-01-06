import React from 'react';
import ReactDom from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import './index.css'

ReactDom.render(
  <Router />,
  document.getElementById('root')
)

reportWebVitals()