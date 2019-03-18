import React, { Component } from 'react'
import Layout from  '../components/layout';
import styled from 'styled-components'
import Logo from '../components/logo'

const ContactContent = styled.div`
    max-width:772px;
    height: 95vh;
    display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    @media (min-width:1440px) {
        width:88%;
    }
    p {
        font-size: 1.2rem;
        color: #BCB2B2;
        line-height:2rem;
    }
    h4 {
        border-color:#BCB2B2;
        font-size:1.5rem;
        font-weight:normal;
    }
`;

const encode = (data) => {
return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }
    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
  
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
    <Layout>
        <ContactContent>
            <div>
                <h1>Contact Me</h1>
                <p>Let’s build something together! Or <a href="mailto:lucas@gilbert.codes?Subject=Hi Gilbert!" target="_top">email</a> email me if you have
                any other questions.</p>
                <form onSubmit={this.handleSubmit}
                name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou"
                >
                <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>
                        Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Message: <textarea name="message" value={message} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                    </form>
                <Logo/>
            </div>
            </ContactContent>
        </Layout>
    )
  }
}
