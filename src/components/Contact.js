import React from 'react';

const contactPicture = 'https://randomuser.me/api/portraits/women/92.jpg';
const contactName = 'Mabel Richards';
const status = true;
const whichStatus = [status ? 'online' : 'offline'];

function Contact() {
    return(
        <div className='Contact'>
            <img className='avatar' src={contactPicture} alt='' />
            <div>
                <p className='name'>{contactName}</p>
                <span className='status'><span className='status-online'></span></span>{whichStatus}
            </div>
        </div>
    );
}

export default Contact;