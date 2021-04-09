import React from 'react';
import s from './ContactsHeader.module.css';
import {ContactsType} from '../../App';

type PropsContactsType = {
    stateForContacts: Array<ContactsType>
}

const ContactsHeeader: React.FC<PropsContactsType> = (
    {
        stateForContacts
    }
) => {
    const contacts = stateForContacts.map(s => {
        return <a key={s.id} href={s.link}><img src={s.image} title={s.title}/></a>
    })
    return (
        <div className={s.headerContacts}>
            <p>Contact Email:</p>
            {contacts}
        </div>
    );
}

export default ContactsHeeader;
