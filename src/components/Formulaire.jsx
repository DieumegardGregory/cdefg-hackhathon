import React, { useState } from "react";
import "./Formulaire.css";

const Formulaire = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <form>
      <h2>Contact-us</h2>
      <div className="containerForm">
        <div className="Name-LastName">
          <div className="demiColonneL">
            <label htmlFor="firstName">
              First Name
              <input
                type="texte"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </label>
          </div>
          <div className="demiColonneR">
            <label htmlFor="lastName">
              Last Name
              <input
                type="texte"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="email">
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
        </div>
        <label htmlFor="message">
          Message
          <textarea
            type="message"
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </label>
      </div>
      <button className="Submit" type="button">
        Submit
      </button>
    </form>
  );
};

export default Formulaire;
