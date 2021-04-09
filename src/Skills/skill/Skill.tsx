import React from 'react';
import s from './Skill.module.css';

type PropsSkillType = {
    id: string
    title: string
    image: string
    description: string
}


const Skill: React.FC<PropsSkillType> = (
    {
        id,
        title,
        image,
        description
    }
) => {
    return (
        <a className={s.skill} href={''} key={id}>
            <img src={image}/>
            <h3>{title}</h3>
            <span>{description}</span>
        </a>
    );
}

export default Skill;
