import React from 'react';
import './assets/scss/contact.scss';

class Contact extends React.Component {
    render() {
        return (
            <div id="contact-page">
                <h1 className="contact-header"> Contact Us! </h1>
                <div className="contact-header-underline"></div>
                <p className="contact-par"> Give us a call at 662.809.1975 or use the form below and we will get back to you as soon as possible. </p>
                <form id="formContainer" action="https://formspree.io/charlie@bordenestates.com" method="POST">
                    <div className="form-grid">
                        <div className="contactRow">
                            <label htmlFor="form_name" className="form_label"><i className="far fa-user"></i></label>
                            <input type="text" name="name" className="input" placeholder="NAME*"/>
                        </div>
                        <div className="contactRow">
                            <label htmlFor="form_email" className="form_label"><i className="far fa-envelope"></i></label>
                            <input type="text" name="email" className="input" placeholder="EMAIL*"/>
                        </div>
                        <div className="contactRow">
                            <label htmlFor="form_number" className="form_label"><i className="fas fa-phone"></i></label>
                            <input type="tel" name="phone" className="input" placeholder="PHONE NUMBER" />
                        </div>
                        <div className="message_row">
                            <label htmlFor="form_message" className="form_label"><i className="fas fa-envelope"></i></label>
                            <input type="text" name="message" className="message_input" placeholder="MESSAGE*" />
                        </div>
                    </div>
                    <button id="form-button"><i className="far fa-paper-plane"></i> SEND </button>
                </form>
            </div>
        )
    }
}

export default Contact;