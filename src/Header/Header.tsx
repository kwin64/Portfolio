import React from 'react';
import s from './Header.module.css';
import Nav from "./Nav/Nav";
import {HeaderType} from "../App";

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
            <Nav stateForHeader={stateForHeader}/>
        </div>
    );
}

export default Header;
