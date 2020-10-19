import React from "react";
import PropTypes from "prop-types";


class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      online: props.online
    }
  }

  render() {
  const whichColorStatus = this.state.online ? "status-online" : "status-offline";
  const whichTextStatus = this.state.online ? "Online" : "Offline";
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="{this.props.name}" />
        <div>
          <p className="name">{this.props.name}</p>
          <span className={this.state.online ? 'status status-online': 'status status-offline'} 
          onClick={event => {
            const isOnlineOrNot = !this.state.online;
            this.setState({ online: isOnlineOrNot })
          }
        }>
            <span className={whichColorStatus}></span>
            {whichTextStatus}
          </span>
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Contact;
