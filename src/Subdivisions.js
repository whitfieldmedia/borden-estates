import React from 'react';
import hillsideLand from './assets/images/hillsideLand.png';
import hillsideLandSmall from './assets/images/hillsideLandSmall.png'
import lotLines from './assets/images/hillsideLandLotLines.png';
import lotLinesSmall from './assets/images/hillsideLandLotLinesSmall.png'
import Gallery from 'react-grid-gallery';
import './assets/scss/subdivisions.scss';

class Subdivisions extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [
                {src: `${hillsideLand}`, thumbnail: `${hillsideLandSmall}`, thumbnailWidth: 320, thumbnailHeight: 200, margin: 20 },
                {src: `${lotLines}`, thumbnail: `${lotLinesSmall}`, thumbnailWidth: 320, thumbnailHeight: 200, margin: 20 }
            ]
        }
    }
    render() {
        return (
            <div id="sub-page">
                <h1 className="sub-header"> Available Lots </h1>
                <h2 className="sub-header2"> Properties are located 2 miles south of Perry Rd. on Highway 51 in Grenada, Ms. </h2>
                <div className="pricing-container">
                    <h2 className="pricing-header"> Lots 1-64 $25,000 - $28,000  </h2>
                    <h2 className="pricing-header"> Lots 65-101 $28,000 - $40,000 </h2>
                </div>
                <div className="image-holder">
                    <Gallery images={this.state.images} showLightboxThumbnails={true} />
                </div>
            </div>
        )
    }
}

export default Subdivisions;