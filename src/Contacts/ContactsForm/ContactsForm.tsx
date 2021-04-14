import React from 'react';
import s from './ContactsForm.module.css';

type PropsContactsType = {}

const Contacts: React.FC<PropsContactsType> = (
    {}
) => {
    return (
        <form className={s.form} action="">
            <input type="text" placeholder='Your name'/>
            <input type="text" placeholder='Your mail'/>
            <input type="text" placeholder='Write a subject'/>
            <textarea placeholder='Your message'/>
            <button>Send message</button>
        </form>
    );
}

export default Contacts;
