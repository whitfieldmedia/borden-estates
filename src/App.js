import React from 'react';
import Home from './Home';
import Subdivisions from './Subdivisions';
import HouseDesigns from './HouseDesigns';
import Covenants from './Covenants';
import Financing from './Financing';
import Contact from './Contact';
import './assets/scss/app.scss';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isToggled: false,
      menuOpen: false
    }
  }
  homeScroll = () => {
    document.getElementById('home-container').scrollIntoView();
    this.setState({
      isToggled: false,
      menuOpen: false
    })
  }
  lotsScroll = () => {
    document.getElementById('lots-container').scrollIntoView();
    this.setState({
      isToggled: false,
      menuOpen: false
    })
  }
  designScroll = () =>{
    document.getElementById('design-container').scrollIntoView();
    this.setState({
      isToggled: false,
      menuOpen: false
    })
  }
  financeScroll = () => {
    document.getElementById('finance-container').scrollIntoView();
    this.setState({
      isToggled: false,
      menuOpen: false
    })
  }
  covenantsScroll = () => {
    document.getElementById('covenants-container').scrollIntoView();
    this.setState({
      isToggled: false,
      menuOpen: false
    })
  }
  contactScroll = () => {
    document.getElementById('contact-container').scrollIntoView();
    this.setState({
      isToggled: false,
      menuOpen: false
    })
  }
  toggleMenu = () => {
    if(!this.state.isToggled) {
      this.setState({
        isToggled: true,
        isOpen: true
      })
    } else {
      this.setState({
        isToggled: false,
        isOpen: false
      })
    }
  }
  render() { 
    return (
      <div className="app">
        <div className="navbar">
          <div className="nav-row">
            <h3 className="nav-header" onClick={this.homeScroll}> <strong>B</strong>ORDEN <br/> <strong>E</strong>STATES </h3>
            <div className="dropdown-content-big">
                <div className="nav-link border-left" onClick={this.lotsScroll}> Lots </div>
                <div className="nav-link" onClick={this.designScroll}> House Designs </div>
                <div className="nav-link" onClick={this.financeScroll}>Financing</div>
                <div className="nav-link" onClick={this.covenantsScroll}>Covenants</div>
                <div className="nav-link no-border" onClick={this.contactScroll}>Contact</div>
            </div>
            <span className="toggle-button" onClick={this.toggleMenu}> {this.state.isToggled ? <i class="material-icons md-36">close</i> : <i class="material-icons md-36">menu</i> } </span>
          </div>

          {this.state.isToggled 
          ?<div className="dropdown-content">
            <div className="nav-link" onClick={this.lotsScroll}> Lots </div>
            <div className="nav-link" onClick={this.designScroll}> House Designs </div>
            <div className="nav-link" onClick={this.financeScroll}>Financing</div>
            <div className="nav-link" onClick={this.covenantsScroll}>Covenants</div>
            <div className="nav-link" onClick={this.contactScroll}>Contact</div>
          </div>
          : null}
        </div>
        <div id="home-container">
          <Home />
        </div>
        <div id="lots-container">
          <Subdivisions />
        </div>
        <div id="design-container">
          <HouseDesigns />
        </div>
        <div id="finance-container">
          <Financing />
        </div>
        <div id="covenants-container">
          <Covenants />
        </div>
        <div id="contact-container">
          <Contact />
        </div>
      </div>
    )
  }
}

export default App;