import React from 'react';
import './assets/scss/footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-row">
                    <a className="footer-link" href="tel:6628091975"> 662.809.1975 </a>
                    <a className="footer-link" href="mailto:charlie@bordenestates.com"> charlie@bordenestates.com </a>
                    <p className="footer-link2"> Highway 51 South Grenada, Ms </p>
                </div>

                <p className="copyright"> Copyright @ 2019 Borden Estates. All rights reserved. </p>
            </div>
        )
    }
}

export default Footer;