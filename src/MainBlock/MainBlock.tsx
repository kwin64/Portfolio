import React from 'react';
import s from './MainBlock.module.css';
import StyleContainer from '../common/styles/Container.module.css';

type PropsMainBlockType = {
    photo: string
}

const MainBlock: React.FC<PropsMainBlockType> = (
    {
        photo
    }
) => {
    return (
        <div className={s.mainBlock}>
            <div className={`${StyleContainer.container} ${s.mainBlock}`}>
                <div className={s.photoMainBlock}>
                    <img src={photo}/>
                </div>
                <div className={s.informationMainBlock}>
                    <span>Hi There</span>
                    <h1>I am Yaschenko Eugene</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </div>
    );
}

export default MainBlock;
