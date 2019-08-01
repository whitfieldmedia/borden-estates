import React from 'react';
import house from './assets/images/141/141-1267.jpg';
import floorplan from './assets/images/141/141-floorplan.jpg';
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {src: `${house}`, thumbnail: `${house}`, thumbnailWidth: 331, thumbnailHeight: 180},
    {src: `${floorplan}`},
]

class House141 extends React.Component {
    render() {
        return (
            <div className="house-container">
                <div className="main-image">
                    <Gallery images={IMAGES} margin="0" />
                </div>
                <h1 className="house-header"> Model Home 141 </h1>
                <div className="detail-holder">
                    <div className="detail-row">
                        <p className="detail-header"> Bedrooms </p> <p className="details"> 3 </p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Bathrooms </p> <p className="details"> 2.5 </p>
                    </div> 
                    <div className="detail-row">
                        <p className="detail-header"> Living Area </p> <p className="details"> 1888 sqft </p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Garage </p>  <p className="details"> 2 Car </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default House141;