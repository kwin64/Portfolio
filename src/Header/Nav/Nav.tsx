import React from 'react';
import style from './Nav.module.css';
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
            <a className={style.linksForMedia} href='#'>
                <span>{s.title}</span>
            </a>
        )
    })
    return (
        <div className={style.nav}>
            {navbar}
        </div>
    );
}

export default Nav;
