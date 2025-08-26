import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Exer1 from './SEMLABEXAM/Exer1';
import Exer2parent from './SEMLABEXAM/Exer2parent';
import Configuration from './Configuration/Configuration';
import Configuration11 from './Component/Configuration11';










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Exer2parent/> */}
 {/* <Exer1/> */}
 {/* <Configuration/> */}
 {/* <Configuration/> */}
 <Configuration11/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
