import React from 'react';
import Design1 from './House141';
import Design2 from './House149';
import Design3 from './House153';
import Design4 from './House175';
import './assets/scss/house-designs.scss';

class HouseDesigns extends React.Component {
    render() {
        return (
            <div id="designPage">
                <h1 className="designHeader"> House Designs </h1>
                <div className="house-design-wrapper">
                    <Design1 />
                    <Design2 />
                    <Design3 />
                    <Design4 />
                </div>
            </div>
        )
    }
}

export default HouseDesigns;