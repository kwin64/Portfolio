import React from 'react';
import s from './Header.module.css';
import Nav from "./Nav/Nav";
import {HeaderType} from "../App";
import StyleContainer from "../common/styles/Container.module.css";

type PropsHeaderType = {
    stateForHeader: Array<HeaderType>
}

const Header: React.FC<PropsHeaderType> = (
    {
        stateForHeader
    }
) => {

    return (
        <div className={s.header}>
            <div className={StyleContainer.container}>
                <Nav stateForHeader={stateForHeader}/>
            </div>
        </div>
    );
}

export default Header;
