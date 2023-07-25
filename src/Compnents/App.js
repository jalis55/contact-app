import React from 'react';

import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import AddContact from './AddContact';
function App() {
  return (
    <div className='container'>
      <Header/>
      <AddContact/>
      <ContactList/>
    </div>
  );
}

export default App;
