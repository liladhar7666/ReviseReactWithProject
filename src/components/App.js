import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
       id : "1",
       name : "Dipesh",
       email : "dipe@gmail.com",
    },
    {
       id : "1",
       name : "nikesh",
       email : "niku@gmail.com", 
    }
  ]

  return (
       <div className='ui container '>
          <Header/>
          
          <AddContact/>
          <ContactList  contacts={contacts}/>
       </div>
  );
}

export default App;
