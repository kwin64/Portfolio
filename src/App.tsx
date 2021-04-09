import React from 'react';
import s from './App.module.css';
import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import MainBlock from "./MainBlock/MainBlock";
import Skills from "./Skills/Skills";
import {v1} from "uuid";
import reactImg from '../src/common/images/react.png'
import reduxImg from '../src/common/images/redux.png'
import typescriptImg from '../src/common/images/typescript.png'

export type OneSkillType = { id: string, title: string, image: string, description: string }
export type StateForSkillType = Array<OneSkillType>

const stateForSkill: StateForSkillType = [
    {id: v1(), title: 'React', image: reactImg, description:'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'},
    {id: v1(), title: 'Redux', image: reduxImg, description: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.'},
    {id: v1(), title: 'TypeScript', image: typescriptImg, description: 'TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.'}
]

const App = (
    {}
) => {
    return (
        <div className={s.page}>
            <Header/>
            <MainBlock/>
            <Skills stateForSkill={stateForSkill}/>
            <Projects/>
        </div>
    );
}

export default App;
