import React from "react";

import "./ContactDetails.css";
import "./AddAndEditContact.css";

function ContactDetails({
  setShowContactDetails,
  name,
  email,
  phoneNumber,
  address,
}) {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="contact-details">
        <div className="close-contact">
          <h2>Contact Details</h2>
          <button
            onClick={() => {
              setShowContactDetails(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"/></svg>
          </button>
        </div>
        <div className="Line"></div>
        <div className="details">
          <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Number: {phoneNumber}</p>
            <p>Address: {address}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
