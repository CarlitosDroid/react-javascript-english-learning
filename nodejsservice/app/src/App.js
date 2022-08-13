import { useState, useEffect } from "react";
import "./App.css";
import { faker } from "@faker-js/faker";

import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import api from "./api/users";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // Retrieve Users
  const retrieveUsers = async () => {
    const response = await api.get("/api/v1/users");
    return response.data;
  };

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: faker.datatype.uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    // READ LOCATION STORAGE
    // This is for local storage to avoid deleting the data once we refresh the page
    /* const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts); */

    // READ INFORMATION FROM WEB SERVICE
    const getAllUsers = async () => {
      const response = await retrieveUsers();
      console.log(response);
      if (response) setContacts(response.value);
    };

    getAllUsers();
  }, []);

  useEffect(() => {
    // INSERT LOCAL STORAGE
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
