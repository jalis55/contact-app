import React from 'react';

import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import AddContact from './AddContact';
function App() {
  let contacts=[
    {
      "id":"1",
      "name":"Jalis",
      "email":"jalis@leads.com"
    },
    {
      "id":"2",
      "name":"Khan",
      "email":"khan@leads.com"
    }
  ]
  return (
    <div className='container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
