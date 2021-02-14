import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background';
import Experience from './components/Experience';
import Header from './components/Header';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Feature from './components/Feature';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/index.css';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
        <Header />
        <Landing />
        <Background />
        <Skills />
        <Experience />
        <Feature />
        <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

