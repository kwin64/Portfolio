import React from 'react';
import s from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {ContactsType} from "../App";

type PropsContactsType = {
    stateForContacts: Array<ContactsType>
}

const Contacts: React.FC<PropsContactsType> = (
    {
        stateForContacts
    }
) => {
const contacts = stateForContacts.map(s=> {
    return <a key={s.id} href={s.link}><img src={s.image} title={s.title}/></a>
})
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${styleContainer.container}`}>
                <h2>Hire Me</h2>
                <p>Contact Email:</p>
                {contacts}
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea>

                    </textarea>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
