import React, { Component } from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form class='ui form' onSubmit={this.handleSubmit} netlify name='contact'>
        <input type='hidden' name='form-name' value='contact' />
        <h1 id='contact-header'>Contact me!</h1>
        <div class='field'>
          <label>
            Your Name:
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div class='field'>
          <label>
            Your Email:
            <input
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div class='field'>
          <label>
            Message:
            <textarea
              name='message'
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button class='ui button' type='submit'>
          Send
        </button>
      </form>
    );
  }
}

export default ContactForm;
