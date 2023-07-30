
import React from "react";
import ContactCard from './ContactCard'

const ContactList=(props)=>{
    const deleteConactHandler = (id) => {
        props.getContactId(id);
      };
      console.log(props.contact);
    const renderContactList=props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact}
            clickHander={deleteConactHandler}
            key={contact.id}
            />
        )
    })

    return(
        <div>
            {renderContactList}
        </div>

    )
}
export default ContactList;