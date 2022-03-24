import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

function App() {
  let [contacts, setContact] = useState([]);
  let [editContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactArray = [...contacts];
    newContactArray.push(newContact);
    setContact(newContactArray);
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContact(newContactsArray);
  }

  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleEditSaveContact(newContact) {
    let newContactArray = contacts.map((item) => {
      if (item.id == newContact.id) {
        return newContact;
      }
      return item;
    });
    setContact(newContactArray);
    setIsEdit(false);
  }

  return (
    <div className="App">
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContact
          editContact={editContact}
          handleEditSaveContact={handleEditSaveContact}
        />
      ) : null}

      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
}

export default App;
