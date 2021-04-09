import React from 'react';
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

const Skills = (
    {}
) => {
    return (
        <div className={s.SkillsBlock}>
            <div className={`${s.skillsContainer} ${styleContainer.container}`}>
                <div className={s.title}>
                    <h2>Skills</h2>
                </div>
                <div className={s.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
