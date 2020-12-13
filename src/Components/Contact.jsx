import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css'



class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Submit'
    }

    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('https://portfolio-node-9xaqymhol.vercel.app/', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Message not sent')
        })
      }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }

    render() {
        return(
            <div className='contact-div'>
            <h2 className='contact'>Contact</h2>
                <form onSubmit={ (e) => this.formSubmit(e)} className='contact-form'>
                    <div className='input-div'>
                    <input
                    onChange={(e) => this.setState({ name: e.target.value})}
                    type="text"
                    name='name'
                    className='input'
                    placeholder='Name'
                    />
                    <input
                    onChange={(e) => this.setState({ email: e.target.value})}
                    type="text"
                    name='email'
                    className='input'
                    placeholder='Your Email'
                    required value={this.state.email}
                    />
                    <textarea
                    onChange={(e) => this.setState({ message: e.target.value})}
                    type="text"
                    name='message'
                    className='input-message'
                    placeholder='Your Message'
                    />
                    <button className='submit-button' type='submit'>{ this.state.buttonText }</button>
                    </div>
                </form>
            
        </div>
        );
    }
}

export default Contact;

