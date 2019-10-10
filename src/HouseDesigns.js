import React from 'react';
import Design1 from './House1';
import Design2 from './House2';
import Design3 from './House3';
import './assets/scss/house-designs.scss';

class HouseDesigns extends React.Component {
    render() {
        return (
            <div id="designPage">
                <h1 className="designHeader"> House Designs </h1>
                <div className="design-header-underline"></div>
                <div className="house-design-wrapper">
                    <Design1 />
                    <Design2 />
                    <Design3 />
                </div>
            </div>
        )
    }
}

export default HouseDesigns;