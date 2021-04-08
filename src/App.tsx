import React from 'react';
import s from './App.module.css';
import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import MainBlock from "./MainBlock/MainBlock";
import Skills from "./Skills/Skills";

const App = (
    {}
) => {
    return (
        <div className={s.page}>
            <Header/>
            <MainBlock/>
            <Skills/>
            <Projects/>

        </div>
    );
}

export default App;
