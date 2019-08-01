import React from 'react';
import guaranty from './assets/images/guaranty-bank.png';
import renasant from './assets/images/renasant-bank.png';
import csb from './assets/images/csb-logo.png';
import kirk from './assets/images/adam-kirk.jpg';
import './assets/scss/financing.scss';

class Financing extends React.Component {
    render() {
        return (
            <div id="finance-page">
                <h1 className="financing-header"> Apply for Financing & Pre Buy your lot now. </h1>
                <div className="bank-container">
                    <a className="bank-link" href="https://gbtonline.com/mortgages/" target="_blank" rel="noopener noreferrer">
                        <img src={guaranty} alt="Guaranty Bank"/>
                    </a>
                    <a className="bank-link" href="https://www.renasantbank.com/personal/mortgage-loans" target="_blank" rel="noopener noreferrer">
                        <img src={renasant} alt="Renasant Bank"/>
                    </a>
                    <a className="bank-link" href="http://clevelandstatebank.com/?page_id=218" target="_blank" rel="noopener noreferrer">
                        <img src={csb} alt="Cleveland State Bank"/>
                    </a>
                </div>
                <div className="closing-container">
                    <img src={kirk} className="closing-img" alt="Adam Kirk, J.D."/>
                    <p className="closing-par"> Adam Kirk closing attorney </p>
                    <a className="closing-link" href="tel:6622263500">(662) 226-3500</a>
                </div>
            </div>
        )
    }
}
export default Financing;