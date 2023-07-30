import React, { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import AddContact from './AddContact';
function App() {

  const [contacts, setContacts] = useState(() => {
    const localValue = localStorage.getItem("CONTACTSLIST")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:uuid(),contact}])
  }
  const removeContactHandler=(id)=>{
    const newContacts=contacts.filter((contact)=>{
      return contact.id !==id
    })
    setContacts(newContacts)
  }


  useEffect(() => {
    localStorage.setItem("CONTACTSLIST", JSON.stringify(contacts))
  }, [contacts])



  return (
    <div className='container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts}  getContatactId={removeContactHandler}/>
    </div>
  );
}

export default App;
