import { FaRegUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import ContactDetails from "./ContactDetails";
import { useState } from "react";

function AllContacts({id,name,phoneNumber,email,address,deleteContact,handleEdit,}) {
  const [showContactDetails, setShowContactDetails] = useState(false);

  return (
    <div className="contactList">
        <p>{id}</p>
    
         <FaRegUserCircle className="profileCircle" />
        <div>
          <h3 className="nameee">{name}</h3>
          <span className="numberr">{phoneNumber}</span>
        </div>
      
            <FaEye onClick={() => {
            setShowContactDetails(true);
          }} className="eyee"/>
      

        <FaTrash onClick={() => {
            deleteContact(id);
          }} className="trash"/>
       
      
          <FaPen 
            onClick={() => {
            handleEdit({
              id,
              name,
              email,
              address,
              phoneNumber,
            });
          }}
           className="penedit"/>

      
        {showContactDetails ? (
        <ContactDetails
          setShowContactDetails={setShowContactDetails}
          name={name}
          email={email}
          address={address}
          phoneNumber={phoneNumber}
        />
      ) : null}
    </div>
  );
}

export default AllContacts;
