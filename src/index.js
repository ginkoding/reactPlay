import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";     

import './index.css';

import App from './App';
import Temp_CM from './classMaterial/Temp_CM';
import Temp_CP from './classProjects/Temp_CP';
import Temp_HW from './homeWork/Temp_HW';
import MyForm from './classProjects/Project31/MyForm';
import Project31_Form from './classProjects/Project31/Project31_Form';
import ParentComp from './classProjects/Project32/ParentComp';
import Project33_State from './classProjects/Project33/Project33_State';
import Project34_useEffect from './classProjects/Project34/Project34_useEffect';
import Project34_useEffectAPI from './classProjects/Project34/Project34_useEffectAPI';




ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

      <Route path ="/" element={<App />} />
      <Route path ="/classMaterial/tempCM" element={<Temp_CM />} />
      <Route path ="/classProjects/Temp_CP" element={<Temp_CP />} />
      <Route path ="/classProjects/Project31/Project31_Form" element={<Project31_Form />} />
      <Route path ="/classProjects/Project31/MyForm" element={<MyForm />} />
      <Route path ="/classProjects/Project32/ParentComp" element={<ParentComp />} />
      <Route path ="/classProjects/Project33/Project33_State" element={<Project33_State />} />
      <Route path ="/classProjects/Project34/Project34_useEffect" element={<Project34_useEffect />} />
      <Route path ="/classProjects/Project34/Project34_useEffectAPI" element={<Project34_useEffectAPI />} />
      <Route path ="/homeWork/tempHW" element={<Temp_HW />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
