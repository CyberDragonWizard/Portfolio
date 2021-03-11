import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css'



class Contact extends Component {

  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });

    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  handleChangeEmail(e) {
    if (
      !e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        email: e.target.value,
      });
      this.setState({ emailError: true });

      if (this.state.email === "") {
        this.setState({ emailError: false });
      }
    } else {
      this.setState({ email: e.target.value, emailError: false });
    }
  }

  formSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    try {
      await axios.post("https://safe-fortress-63931.herokuapp.com/contact", data);
      this.setState({ sent: true }, this.resetForm());
    } catch (error) {
      console.log(error);
    }
  };

  render() {
        return(
            <div className='contact-div'>
            <h2 className='contact'>Contact</h2>
                <form onSubmit={(e) => this.formSubmit(e)} className='contact-form' method='POST'>
                    <div className='input-div'>
                    <input
                    onChange={(e) => this.setState({ name: e.target.value })}
                    type="text"
                    value={this.state.name}
                    className='input'
                    placeholder='Name'
                    id="name"
                    required
                    />
                    <input
                    onChange={(e) => this.handleChangeEmail(e)}
                    type="email"
                    value={this.state.email}
                    className='input'
                    placeholder='Your Email'
                    id="email"
                    required
                    />
                    <textarea
                    onChange={(e) => this.setState({ message: e.target.value })}
                    name='message'
                    className='input-message'
                    placeholder='Your Message'
                    id="message"
                    required
                    />
                    <button className='submit-button' type='submit'>
                    {this.state.buttonText}
                    </button>
                    </div>
                </form>
            
        </div>
        );
    }
}

export default Contact;
