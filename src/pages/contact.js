import React from 'react'

import Container from '../components/Container'
import ContactForm from '../components/ContactForm'

import './contact.css'

const Contact = () => (
  <div className="page page-contact">
    <Container>
      <p>Have a product idea? Need help on an existing project?</p>
      <h2>Send us a Message</h2>
      <ContactForm />
    </Container>
  </div>
)

export default Contact
