import React from 'react';
import s from './Nav.module.css';
import {HeaderType} from "../../App";

type PropsNavType = {
    stateForHeader: Array<HeaderType>
}


const Nav: React.FC<PropsNavType> = (
    {
        stateForHeader
    }
) => {
    const navbar = stateForHeader.map(s => {
        return (
            <a href='#'>
                <span>{s.title}</span>
            </a>
        )
    })
    return (
        <div className={s.nav}>
            {navbar}
        </div>
    );
}

export default Nav;
