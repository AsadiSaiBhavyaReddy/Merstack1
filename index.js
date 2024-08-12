import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {  Route,Routes } from 'react-router-dom';
import Contactus from './components/Contactus';
import Header from './components/Header';
import Footer from './components/Footer';
import Appointment from './components/Appointment';
import Faculty from './components/Faculty';
import Login from './components/Login';
import Logout from './components/Logout';
import Parent from './components/Parent';
import Report from './components/Report';
import Student from './components/Student';
import Visitor from './components/Visitor';
import Taf from './components/Taf';
import GitHubUserDetails from './components/GitHubUserDetails';
import ParentComponent from './components/ParentComponent';
import SendMail from './components/SendMail';

import Tabbar from './components/Tabbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <center> 
  
    </center> 
    
    <Tabbar></Tabbar>
    
    <Routes> 
    <Route path=""element={<App/>}/>   
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/Parent" element={<Parent/>} /> 
    <Route path="/Faculty" element={<Faculty/>} />
    <Route path="/Contactus" element={<Contactus/>} /> 
    <Route path="/Appointment" element={<Appointment/>} /> 
    <Route path="/Student" element={<Student/>} /> 
    <Route path="/Report" element={<Report/>} /> 
    <Route path="/Taf" element={<Taf/>} /> 
     <Route path="/Github" element={<GitHubUserDetails/>} /> 
     <Route path="/Login" element={<Login/>} /> 
     <Route path="/SendMail" element={<SendMail/>} /> 
  
   
       
    </Routes>
    
    
    
   
                                   
   
  </BrowserRouter>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// src/index.js

