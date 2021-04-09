import React from 'react';
import s from './MainBlock.module.css';
import StyleContainer from '../common/styles/Container.module.css';

const MainBlock = (
    {}
) => {
    return (
        <div className={s.mainBlock}>
            <div className={StyleContainer.container}>
            <div className={s.informationMainBlock}>
                <span>Hi There</span>
                <h1>I am Yaschenko Eugene</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photoMainBlock}>
                Photo
                <img src="" />
            </div>
            </div>
        </div>
    );
}

export default MainBlock;
