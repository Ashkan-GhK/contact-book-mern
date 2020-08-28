import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
     ADD_CONTACT,
     DELETE_CONTACT,
     SET_CURRENT,
     CLEAR_CURRENT,
     UPDATE_CONTACT,
     FILTER_CONTACTS, 
     CLEAR_FILTER 
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
             id: 1,
             name: 'ashix ox',
             email: 'ashix@yahoo.com',
             phone: '111-111-1111',
             type: 'personal'
            },
            {
                id: 2,
                name: 'ohaio padakasor',
                email: 'hix@yahoo.com',
                phone: '111-333-1111',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Ajooli majooli',
                email: 'amajooli@gmail.com',
                phone: '111-111-4354',
                type: 'professional'
            }
        ]
    };

    const [ state, dispatch ] = useReducer(contactReducer, initialState);

    // Add Contact


    // Delete Contact


    // Set Current Contact
    

    // Clear Current Contact


    // Update Contact


    // Filter Contacts


    // Clear Contacts


    return (
        <ContactContext.Provider
         value={{
             contacts: state.contacts

         }}>
            { props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;