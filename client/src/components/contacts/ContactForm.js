import React, { useState } from 'react';

function ContactForm() {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type} = contact;


    return (
        <form>
            <h2 className="text-primary">Add Contact</h2>
            <input 
              type='text' 
              placeholder='name'
              name='name'
              value={name}
              onChange={onChange}
            />
            <input 
              type='email' 
              placeholder='Email'
              name='email'
              value={email}
              onChange={onChange}
            />
             <input 
              type='text' 
              placeholder='Phone'
              name='phone'
              value={phone}
              onChange={onChange}
            /> 
            <h5>
              Contact Type
            </h5>
            <input type="radio" name="type" value="personal" checked={}t
        </form>
    )
}

export default ContactForm;