import { useState } from "react";
import "./EditContact.css";

const EditContact = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [surname, setSurname] = useState(props.editContact.surname);
  let [img, setImg] = useState(props.editContact.img);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.surname = surname;
    contact.img = img;

    props.handleEditSaveContact(contact);
    setName("");
    setSurname("");
    setImg("");
  }

  return (
    <div>
      <div className="main-modale">
        <div className="inner-modale text-center">
          <h3>Change Contact</h3>
          <input
            className="mt-3"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
            value={name}
          />
          <br />
          <input
            className="my-2"
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="surname"
            value={surname}
          />
          <br />
          <input
            className="mb-2"
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="image"
            value={img}
          />
          <br />
          <button
            style={{ border: "none", backgroundColor: "aqua" }}
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>

      {/* <input
        className="mt-5"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
      />
      <br />
      <input
        className="my-2"
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="surname"
        value={surname}
      />
      <br />
      <input
        className="mb-2"
        onChange={(e) => setImg(e.target.value)}
        type="text"
        placeholder="image"
        value={img}
      />
      <br />
      <button
        style={{ border: "none", backgroundColor: "aqua" }}
        onClick={handleSaveClick}
      >
        Save
      </button> */}
    </div>
  );
};

export default EditContact;
