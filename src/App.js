import React from 'react';
import Menu from './components/Menu';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Skills from './components/Skills';
import Interests from './components/Interests';
import './App.css';

function App() {
    return (
        <div className="App">
            <Menu />
            <SocialMedia />
            <About />
            <Skills />
            <Interests />
        </div>
    );
}

export default App;
