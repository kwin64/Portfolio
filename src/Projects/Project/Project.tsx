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
            <div className={s.projectInformation}>
                <h3>{title}</h3>
                <span>{description}</span>
                <button>Show more</button>
            </div>
        </div>
    );
}

export default Project;
