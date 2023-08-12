import React, { Component } from 'react';
import ContactMenu from './ContactMenu';
import ContactSocials from './ContactSocials';
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <ContactSocials/>
      <ContactMenu />
    </>
  );
};

export default Contact;
