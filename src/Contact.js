import React, { useState } from "react";
import "./Contact.css";
import userData from "./json/sampleData.json";
import AddContact from "./AddAndEditContact.js";
import Allitems from "./AllContactDetails.js";
import { FaPlusCircle } from "react-icons/fa";


function Contact() {
  const [items, setitems] = useState(userData);
  const [isShowAddContact, setIsShowAddContact] = useState(false);
  const [pageName, setPageName] = useState("Add Contact");
  const [selectedContact, setSelectedContact] = useState(null); // To store the contact being edited
  const [search, setSearch] = useState("");

  // Filter items based on search
  const filtereditems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Function to handle the Edit button click
  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setPageName("Edit Contact");
    setIsShowAddContact(true);
  };

  return (
    <>
      <div className="contact">
        <button
          className="allContact"
          onClick={() => {
            setIsShowAddContact(true);
            setPageName("Add Contact");
            setSelectedContact(null); // Clear previous selection for new contact
          }}
        >
          Add Contact <FaPlusCircle />  
        </button>

        <input
          type="text"
          placeholder="Search Contact"
          className="searchContact"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="itemsList">
          {filtereditems.map((item) => (
            <Allitems
              key={item.id}
              id={item.id}
              name={item.name}
              phoneNumber={item.mobile}
              setPageName={setPageName}
              setIsShowAddContact={setIsShowAddContact}
              email={item.email}
              address={item.address}
              deleteContact={(id) =>
                setitems(items.filter((contact) => contact.id !== id))
              }
              handleEdit={() => handleEdit(item)} // Pass handleEdit function
            />
          ))}
        </div>
      </div>

      {isShowAddContact && (
        <AddContact
          pageName={pageName}
          setIsShowAddContact={setIsShowAddContact}
          items={items}
          setitems={setitems}
          selectedContact={selectedContact} // Pass the contact being edited
        />
      )}
    </>
  );
}

export default Contact;
