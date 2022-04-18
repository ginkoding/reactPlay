import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";     

import './index.css';

import App from './App';
import TempCM from './classMaterial/TempCM';
import TempCP from './classProjects/TempCP';
import Project31Form from './classProjects/Project31/Project31Form';
import ParentComp from './classProjects/Project32/ParentComp';
import Project33State from './classProjects/Project33/Project33State';
import Project34UseEffect from './classProjects/Project34/Project34UseEffect';
import Project35FormAndEvents from './classProjects/Project35/Project35FormAndEvents';
import Project35JustForms from './classProjects/Project35/Project35JustForms';
import Project36ToDoApp from './classProjects/Project36/Project36ToDoApp';
import Project37Wordle from './classProjects/Project37/Project37Wordle';




ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

      <Route path ="/classMaterial/TempCM" element={<TempCM />} />
      <Route path ="/classProjects/TempCP" element={<TempCP />} />
      <Route path ="/classProjects/Project31/Project31Form" element={<Project31Form />} />
      <Route path ="/classProjects/Project32/ParentComp" element={<ParentComp />} />
      <Route path ="/classProjects/Project33/Project33State" element={<Project33State />} />
      <Route path ="/classProjects/Project34/Project34UseEffect" element={<Project34UseEffect />} />
      <Route path ="/classProjects/Project35/Project35FormAndEvents" element={<Project35FormAndEvents />} />
      <Route path ="/classProjects/Project35/Project35JustForms" element={<Project35JustForms />} /> 
      <Route path ="/classProjects/Project36/Project36ToDoApp" element={<Project36ToDoApp />} /> 
      <Route path ="/classProjects/Project37/Project37Wordle" element={<Project37Wordle />} /> 
      <Route path ="/App" element={<App />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
