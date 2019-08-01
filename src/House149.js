import React from 'react';
import house from './assets/images/149/149-1009.jpg';
import floorplan from './assets/images/149/149-floorplan.jpg';
import floorplan2 from './assets/images/149/149-floorplan2.jpg';
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {src: `${house}`, thumbnail: `${house}`, thumbnailWidth: 331, thumbnailHeight: 180},
    {src: `${floorplan}`},
    {src: `${floorplan2}`}
]

class House149 extends React.Component {
    render() {
        return (
            <div className="house-container">
                <div className="main-image">
                    <Gallery images={IMAGES} margin="0" />
                </div>
                <h1 className="house-header"> Model Home 149 </h1>
                <div className="detail-holder">
                    <div className="detail-row">
                        <p className="detail-header"> Bedrooms </p> <p className="details"> 3 </p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Bathrooms </p> <p className="details"> 2.5 </p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Living Area </p><p className="details"> 1914 sqft </p> 
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Garage </p><p className="details"> 2 Car </p>
                    </div>                                                            
                </div>
            </div>
        )
    }
}

export default House149;