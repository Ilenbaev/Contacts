import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./AddContact.css";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [img, setImg] = useState("");

  function handleClick() {
    if (!name.trim() || !surname.trim() || !img.trim()) {
      alert("Заполните поле");
      return;
    }
    let newContact = {
      name,
      surname,
      img,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setImg("");
  }
  return (
    <div className="text-center">
      <Navbar bg="success" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Contact</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <button
              onClick={() => {
                document.querySelector(".main-modal").style.display = "block";
              }}
              style={{
                border: "none",
                backgroundColor: "aqua",
                borderRadius: "5px",
              }}
            >
              Add Contact
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-modal">
        <div className="inner-modal">
          <h3>New Contact</h3>
          <input
            className="my-2"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
            value={name}
          />{" "}
          <br />
          <input
            className="mb-2"
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="surname"
            value={surname}
          />
          <input
            className="mb-2"
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="image"
            value={img}
          />
          <br />
          <button
            style={{
              border: "none",
              backgroundColor: "aqua",
              margin: "15px 10px 0px 0px",
              borderRadius: "5px",
            }}
            onClick={handleClick}
          >
            Save Contact
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "orange",
              borderRadius: "5px",
            }}
            onClick={() => {
              document.querySelector(".main-modal").style.display = "none";
            }}
          >
            CLose
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
