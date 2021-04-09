import React from 'react';
import s from './Project.module.css';

type PropsProjectType = {
    id: string
    title: string
    image: string
    description: string
}

const Project: React.FC<PropsProjectType> = (
    {
        id,
        title,
        image,
        description
    }
) => {
    return (
        <div className={s.project} key={id}>
            <div className={s.imageContainer}>
                <img src={image}/>
                <button>Show</button>
            </div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    );
}

export default Project;
