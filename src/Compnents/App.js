import React, { useState, useEffect } from 'react';
import {uuid} from uuidv4;
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


  useEffect(() => {
    localStorage.setItem("CONTACTSLIST", JSON.stringify(contacts))
  }, [contacts])



  return (
    <div className='container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
