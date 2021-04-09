import React from 'react';
import s from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from './Project/Project';
import {OneProjectType} from "../App";

type PropsProjectsType = {
    stateForProjects: Array<OneProjectType>
}

const Projects: React.FC<PropsProjectsType> = (
    {
        stateForProjects
    }
) => {
    const project = stateForProjects.map(s => {
            return <Project id={s.id}
                            title={s.title}
                            image={s.image}
                            description={s.description}
            />
        }
    )
    return (
        <div className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${styleContainer.container}`}>
                <div className={s.title}>
                    <h2>My Projects</h2>
                </div>
                <div className={s.projects}>
                    {project}
                </div>
            </div>
        </div>
    );
}

export default Projects;
