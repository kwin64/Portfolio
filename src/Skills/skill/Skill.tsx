import React from 'react';
import s from './Skill.module.css';

type PropsTypeSkill = {
    id: string
    title: string
    image: string
    description: string
}


const Skill: React.FC<PropsTypeSkill> = (
    {
        id,
        title,
        image,
        description
    }
) => {
    return (
        <div>
            <a className={s.skill} href={''} key={id}>
                <img src={image}/>
                <h3>{title}</h3>
                <span>{description}</span>
            </a>
        </div>
    );
}

export default Skill;
