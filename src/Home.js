import React from 'react';
import background from './assets/images/background.svg'
import backgroundSmall from './assets/images/background-small2.svg';
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
                <div className="top-container">
                    {(this.state.window > 800)
                    ?<img src={background} alt="Hillside Investments llc." />
                    :<img src={backgroundSmall} alt="Hillside Investments llc." /> }
                    <h1 className="header"> BORDEN ESTATES </h1>
                    <h2 className="header2"> Invest in your new future. </h2>
                </div>
            </div>
        )
    }
}

export default Home;