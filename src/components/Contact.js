import React from "react";
import PropTypes from "prop-types";

function Contact(props) {
  const whichColorStatus = props.online ? "status-online" : "status-offline";
  const whichTextStatus = props.online ? "Online" : "Offline";
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="{props.name}" />
      <div>
        <p className="name">{props.name}</p>
        <span className="status">
          <span className={whichColorStatus}></span>
          {whichTextStatus}
        </span>
      </div>
    </div>
  );
}

Contact.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Contact;
