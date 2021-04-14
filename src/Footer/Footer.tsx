import React from 'react';
import {ContactsType} from '../App';
import s from './Footer.module.css';

type PropsContactsType = {
    stateForFooter: Array<ContactsType>
}

const Footer: React.FC<PropsContactsType> = (
    {
        stateForFooter
    }
) => {
    const contacts = stateForFooter.map(s => {
        return <a key={s.id} href={s.link}><img src={s.image} title={s.title}/></a>
    })
    return (
        <div className={s.footerContacts}>
            <div className={s.footerTitle}>
                <p>Contact Email:</p>
            </div>
            <div className={s.contacts}>
                {contacts}
            </div>
        </div>
    );
}

export default Footer;
