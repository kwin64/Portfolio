import React from 'react';
import s from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {ContactsType} from "../App";
import ContactsHeader from './ContactsHeader/ContactsHeader';

type PropsContactsType = {
    stateForContacts: Array<ContactsType>
}

const Contacts: React.FC<PropsContactsType> = (
    {
        stateForContacts
    }
) => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${styleContainer.container}`}>
                <h2>Hire Me</h2>
                    <ContactsHeader stateForContacts={stateForContacts}/>
                <div className={''}>
                    <form action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea>

                    </textarea>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
