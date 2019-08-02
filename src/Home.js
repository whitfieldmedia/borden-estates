import React from 'react';
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
            </div>
        )
    }
}

export default Home;