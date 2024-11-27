import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./AddAndEditContact.css";

function AddContact({
  pageName,
  setIsShowAddContact,
  items,
  setitems,
  selectedContact,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Populate the form with selected contact's data for editing
  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name);
      setEmail(selectedContact.email);
      setAddress(selectedContact.address);
      setPhoneNumber(selectedContact.mobile);
    }
  }, [selectedContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !phoneNumber || !address) {
      alert("All fields are required.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (selectedContact) {
      // Edit operation: Update existing contact
      const updatedContacts = items.map((contact) =>
        contact.id === selectedContact.id
          ? { ...contact, name, email, address, mobile: phoneNumber }
          : contact
      );
      setitems(updatedContacts);
    } else {
      // Add operation: Create a new contact
      const newContact = {
        id:items.length + 1,
        name,
        email,
        address,
        mobile: phoneNumber,
      };
      setitems([...items, newContact]);
    }

    // Reset form and close modal
    setName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
    setIsShowAddContact(false);
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper"></div>
      <div className="addContact">
        <div className="closeAddContact">
          <h2>{pageName}</h2>
          <button onClick={() => setIsShowAddContact(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"/></svg>
          </button>
        </div>
        <div className="Line"></div>
        <form className="addContactForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="Email">Email:</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber">Phone Number:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="Address">Address:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="addContactButton">
            <button className="submitContact" type="submit">
              {selectedContact ? "Update" : "Add Contact"}
            </button>
            <button
              className="resetContact"
              type="button"
              onClick={() => {
                setName("");
                setEmail("");
                setAddress("");
                setPhoneNumber("");
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>,
    document.querySelector(".portalModalDiv")
  );
}

export default AddContact;
