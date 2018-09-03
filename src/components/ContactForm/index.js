import React, { Component } from 'react'

import Button from '../Button'
import FormItem from '../FormItem'

import './ContactForm.css'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    const { name, email, message } = this.state
    return (
      <form
        acceptCharset="UTF-8"
        action="https://formkeep.com/f/6a940db2cb87"
        method="POST"
        className="form contact-form"
      >
        <FormItem
          label="Name"
          id="name"
          required
          value={name}
          onChange={this.handleChange}
          placeholder="John Smith"
        />
        <FormItem
          label="Email"
          id="email"
          type="email"
          required
          value={email}
          onChange={this.handleChange}
          placeholder="johnsmith@email.com"
        />
        <FormItem
          label="Message"
          id="message"
          type="textarea"
          required
          value={message}
          onChange={this.handleChange}
        />

        <div className="form-actions">
          <Button>Submit</Button>
        </div>
      </form>
    )
  }
}
export default ContactForm
