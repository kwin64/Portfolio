import React from 'react';
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import {StateForSkillType} from "../App";

type PropsTypeSkills = {
    stateForSkills: StateForSkillType
}

const Skills: React.FC<PropsTypeSkills> = (
    {
        stateForSkills
    }
) => {

    const skill = stateForSkills.map(s => {
            return <Skill id={s.id}
                          title={s.title}
                          image={s.image}
                          description={s.description}
            />
        }
    )
    return (
        <div className={s.SkillsBlock}>
            <div className={`${s.skillsContainer} ${styleContainer.container}`}>
                <div className={s.title}>
                    <h2>Skills</h2>
                </div>
                <div className={s.skills}>
                    {skill}
                </div>
            </div>
        </div>
    );
}

export default Skills;
