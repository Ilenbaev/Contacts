import React from "react";

const ContactList = (props) => {
  return (
    <div style={{ marginLeft: "50px", display: "flex" }}>
      {props.contacts.map((item, index) => (
        <ul
          key={item.id}
          style={{
            listStyleType: "none",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            margin: "15px",
          }}
        >
          <li>
            <img src={item.img} width="200px" height="250px" />
          </li>
          <li>{item.name}</li>
          <li>{item.surname}</li>
          <li>
            <button
              className="btn-danger border rounded"
              onClick={() => props.handleDeleteContact(item.id)}
            >
              Delete
            </button>
            <button
              className="btn-success border rounded"
              onClick={() => props.handleEditIndex(index)}
            >
              Edit
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
