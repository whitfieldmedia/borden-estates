import React from 'react';
import background from './assets/images/background.svg'
import backgroundSmall from './assets/images/background-small2.svg';
import bordenEstates from './assets/images/house.png';
import './assets/scss/home.scss';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            window: window.innerWidth
        }
    }
    resize = () => {
        this.setState({
            window: window.innerWidth
        })
    }
    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }
    render() {
        return (
            <div className="home-container">
                <div className="top-container"></div>
                <h1 className="header"> <strong>B</strong>ORDEN  <strong>E</strong>STATES </h1>
                {/* <h2 className="header2"> <strong>I</strong>NVEST IN YOUR NEW FUTURE. </h2> */}
            </div>
        )
    }
}

export default Home;