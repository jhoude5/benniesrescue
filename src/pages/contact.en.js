import React, { useState } from 'react';
import Header from '../components/header';
import '../sass/styles.scss';
import Footer from "../components/footer";
import Adopt from "../components/adopt";
import { navigate } from 'gatsby';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault()
    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
                navigate("/en/thank-you/");
            // Clear form fields
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => document.querySelector('.error').innerText = 'Something went wrong, pls try again.');
};
  return (
    <main>
      <Header page='/fr/contact'/>
      <div className="container contact-us">
        <div className="row">
            <h1>Contact Us</h1>
            <form className='contact-us-form' name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} id="contact-form">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="row clearfix">
                    <div className=" form-group">
                        <label for="name">Name <span className='required'>*</span>
                        <input id="name" onChange={({ target }) => setName(target.value)}
                          type="text"  name="name" value={name} minLength="3" placeholder="Your Full Name" /></label>
                    </div>

                    <div className="form-group">
                        <label for="email">Email <span className='required'>*</span>
                        <input id="email" className='col-md-11' type="email"
                            name="email" value={email} 
                            onChange={({ target }) => setEmail(target.value)} placeholder="Your Email" /></label>
                    </div>

                    <div className="form-group">
                        <label for="message">Message <span className='required'>*</span>
                        <textarea id="message" name="message" placeholder="Message"  onChange={({ target }) => setMessage(target.value)}
                            value={message}></textarea></label>
                    </div>

                    <div className="form-group form-button">
                        <button className="theme-btn btn-style-one" type="submit">SUBMIT</button>
                    </div>
                </div>
            </form>
            
        </div>
      </div>
      <section className='adopt-cta'>
        <Adopt />
      </section>
      <Footer />
    </main>
  )
}

export default Contact

export const Head = () => <title>Contact</title>