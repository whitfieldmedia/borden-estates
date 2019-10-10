import React from 'react';
import './assets/scss/contact.scss';

class Contact extends React.Component {
    render() {
        return (
            <div id="contact-page">
                <h1 className="contact-header"> Contact Us! </h1>
                <p className="contact-name"> Charlie Whitfield </p>
                <p className="contact-par"> 
                    <a className="contact-link" href="tel:6628091975"> 
                        <i class="fas fa-phone"></i> 
                        (662) 809-1975 
                    </a> 
                </p>
                <p className="contact-par"> 
                    <a href="mailto:charlie@bordenestates.com" className="contact-link"> 
                        <i class="fas fa-envelope"></i>
                        charlie@bordenestates.com 
                    </a> 
                </p>
                <p className="contact-par"> Give me a call or shoot me an email with any questions or if you're interested in learning more about Borden Estates. </p>
            </div>
        )
    }
}

export default Contact;