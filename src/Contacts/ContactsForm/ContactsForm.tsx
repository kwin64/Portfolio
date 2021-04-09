import React from 'react';
import s from './ContactsForm.module.css';
import {ContactsType} from "../../App";

type PropsContactsType = {}

const Contacts: React.FC<PropsContactsType> = (
    {}
) => {
    return (
        <form className={s.form} action="">
            <input type="text"/>
            <input type="text"/>
            <textarea></textarea>
        </form>
    );
}

export default Contacts;
