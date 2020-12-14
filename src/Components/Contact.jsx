import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css'



class Contact extends Component {

    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          message: "",
          status: "Submit"
        };   
      }

      handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
          this.setState({ name: event.target.value });
        } else if (field === "email") {
          this.setState({ email: event.target.value });
        } else if (field === "message") {
          this.setState({ message: event.target.value });
        }
      }

      handleSubmit(event) {
        event.preventDefault();  
        this.setState({ status: "Sending" });  
        axios({
          method: "POST",
          url: "https://portfolio-node-sand.vercel.app/contact",
          data: this.state,
        }).then((response) => {
          if (response.data.status === "sent") {
            alert("Message Sent");
            this.setState({ name: "", email: "", message: "", status: "Submit" });
          } else if (response.data.status === "failed") {
            alert("Message Failed");
          }
        });
      }

    render() {
        let buttonText = this.state.status;
        return(
            <div className='contact-div'>
            <h2 className='contact'>Contact</h2>
                <form onSubmit={this.handleSubmit.bind(this)} className='contact-form' method='POST'>
                    <div className='input-div'>
                    <input
                    onChange={this.handleChange.bind(this)}
                    type="text"
                    value={this.state.name}
                    className='input'
                    placeholder='Name'
                    id="name"
                    required
                    />
                    <input
                    onChange={this.handleChange.bind(this)}
                    type="email"
                    value={this.state.email}
                    className='input'
                    placeholder='Your Email'
                    id="email"
                    required
                    />
                    <textarea
                    onChange={this.handleChange.bind(this)}
                    name='message'
                    className='input-message'
                    placeholder='Your Message'
                    id="message"
                    required
                    />
                    <button className='submit-button' type='submit'>{buttonText}</button>
                    </div>
                </form>
            
        </div>
        );
    }
}

export default Contact;

