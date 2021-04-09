import React from 'react';
import s from './App.module.css';
import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import MainBlock from "./MainBlock/MainBlock";
import Skills from "./Skills/Skills";
import {v1} from "uuid";
import reactImg from '../src/common/images/react.png'

import counterImg from '../src/common/images/counter.png'
import SocialNetworkImg from '../src/common/images/sn.png'
import todoImg from '../src/common/images/todo.png'

import reduxImg from '../src/common/images/redux.png'
import typescriptImg from '../src/common/images/typescript.png'
import catImg from '../src/common/images/cat.jpg'

export type OneSkillType = { id: string, title: string, image: string, description: string }
export type StateForSkillType = Array<OneSkillType>

const stateForSkill: StateForSkillType = [
    {id: v1(), title: 'React', image: reactImg, description:'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'},
    {id: v1(), title: 'Redux', image: reduxImg, description: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.'},
    {id: v1(), title: 'TypeScript', image: typescriptImg, description: 'TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.'}
]

export type OneProjectType = { id: string, title: string, image: string, description: string }
export type StateForProjectsType = Array<OneProjectType>

const stateForProjects:StateForProjectsType = [
    {id: v1(), title:'Social network', image:SocialNetworkImg, description:'A social network is a social structure made up of a set of social actors (such as individuals or organizations), sets of dyadic ties, and other social interactions between actors. The social network perspective provides a set of methods for analyzing the structure of whole social entities as well as a variety of theories explaining the patterns observed in these structures.[1] The study of these structures uses social network analysis to identify local and global patterns, locate influential entities, and examine network dynamics.'},
    {id: v1(), title:'Todolist', image:todoImg, description:'Time management is the process of planning and exercising conscious control of time spent on specific activities, especially to increase effectiveness, efficiency, and productivity. It involves a juggling act of various demands upon a person relating to work, social life, family, hobbies, personal interests, and commitments with the finiteness of time. Using time effectively gives the person "choice" on spending or managing activities at their own time and expediency.'},
    {id: v1(), title:'Counter', image:counterImg, description:'In digital logic and computing, a counter is a device which stores (and sometimes displays) the number of times a particular event or process has occurred, often in relationship to a clock. The most common type is a sequential digital logic circuit with an input line called the clock and multiple output lines. The values on the output lines represent a number in the binary or BCD number system. Each pulse applied to the clock input increments or decrements the number in the counter.'}
]


const App = (
    {}
) => {
    return (
        <div className={s.page}>
            <Header/>
            <MainBlock photo={catImg}/>
            <Skills stateForSkills={stateForSkill}/>
            <Projects stateForProjects={stateForProjects}/>
        </div>
    );
}

export default App;
