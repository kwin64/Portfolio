import React from 'react';
import s from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import ContactsForm from './ContactsForm/ContactsForm';


const Contacts: React.FC = (
    {}
) => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${styleContainer.container}`}>
                <h2>Hire Me</h2>
                <div className={s.formContainer}>
                    <ContactsForm/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
