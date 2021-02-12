import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background';
import Experience from './components/Experience';
import Header from './components/Header';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Feature from './components/Feature';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
    <Background />
    <Skills />
    <Experience />
    <Feature />
  </React.StrictMode>,
  document.getElementById('root')
);

