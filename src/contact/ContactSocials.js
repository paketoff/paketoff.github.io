import React, { Component } from 'react';
import whatsAppImg from '../assets/whatsapp.svg';
import githubImg from '../assets/github.svg';
import linkedInImg from '../assets/linkedin.svg';
import '../styles/contactSocials.css';

export default class ContactSocials extends Component {
  render() {
    return (
      <div className="contact-socials">
        <div className="contact-socials__wrapper">
          <div className="contact-socials__text">
            <p>
              Reach out to me through any convenient method: 
            </p>
          </div>
          <div className="contact-socials__icons">
            <a href='https://wa.me/+32475315640'><img src={whatsAppImg} alt='whatsapp_icon'/></a>
            <a href='https://github.com/Paketoff'><img src={githubImg} alt='github_icon'/></a>
            <a href='https://www.linkedin.com/in/roman-rudyi-9422aa239/'><img src={linkedInImg} alt='linkedIn_icon'/></a>
          </div>
        </div>
      </div>
    )
  }
}
