import React, { useState } from 'react';
import Header from '../components/fr/header';
import '../sass/styles.scss';
import Footer from '../components/fr/footer';
import Adopt from '../components/fr/adopt';
import { navigate } from 'gatsby';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault()
    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch("/contact.fr.js", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            navigate("/fr/thank-you/");
            // Clear form fields
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => document.querySelector('.error').innerText = 'Something went wrong, pls try again.');
};
  return (
    <main>
      <Header page='/en/contact'/>
      <div className="container">
        <div className="row">
            <h1>Contactez-nous</h1>
            <form className='contact-us-form' name="contact-fr" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} id="contact-fr">
                <input type="hidden" name="form-name" value="contact-fr" />
                <input type="hidden" name="bot-field" />
                <div className="row clearfix">
                    <div className=" form-group">
                        <label for='name'>Nom <span className='required'>*</span>
                        <input id='name' onChange={({ target }) => setName(target.value)}
                          type="text" required name="name" value={name} minLength="3" placeholder="Votre nom complet" /></label>
                    </div>

                    <div className="form-group">
                        <label for='email'>Email <span className='required'>*</span>
                        <input id='email' type="email"
                            name="email" value={email} required
                            onChange={({ target }) => setEmail(target.value)} placeholder="Votre Email" /></label>
                    </div>

                    <div className="form-group">
                        <label for='message'>Message <span className='required'>*</span>
                        <textarea id='message' name="message" placeholder="Message" required onChange={({ target }) => setMessage(target.value)}
                            value={message}></textarea></label>
                    </div>

                    <div className="form-group form-button">
                        <button className="theme-btn btn-style-one" type="submit">SOUMETTRE</button>
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
export const Head = () => <title>Contactez-nous</title>

